package student.manchester.security;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import student.manchester.configuration.JWTSecurityConfiguration;
import student.manchester.model.auth.Roles;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.JWTTokenizerService;
import student.manchester.service.user.UserService;

import java.util.function.Consumer;
import java.util.stream.Stream;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static student.manchester.configuration.JWTSecurityConfiguration.PUBLIC_ENDPOINTS;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_HEADER;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_PREFIX;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_SEPARATOR;

/**
 * This test is intended to assure the application is protected on a general level,
 * meaning it is concerned forUser testing the proper configuration of {@link JWTSecurityConfiguration}
 * rather than specific business security measures.
 *
 * This test depends on {@link JWTTokenizerService} for issuing correct tokens.
 *
 * @author Anastas Anastasov
 * on 2/9/2019.
 */
@RunWith(SpringRunner.class)
@Import(JWTSecurityConfiguration.class)
@WebMvcTest
public class SecurityConfigurationTest {

    @MockBean
    private UserService userService;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JWTTokenizerService tokenizer;

    // Referring to specific end-points
    private static final String[] ADMIN_ENDPOINTS = {
            "/swagger-ui.html",
            "/v2/api-docs/",
            "/actuator/"
    };

    /**
     * This test is concerned with assuring ALL ADMIN endpoints are NOT accessible by non-admins.
     */
    @Test
    public void accessAdminResource() throws Exception {

        // Assure Unauthenticated calls cannot get access
        when(userService.findById(anyLong())).thenReturn(new UserDTO());
        Stream.of(ADMIN_ENDPOINTS)
                .forEach(adminEndpoint -> {
                    try {
                        mockMvc.perform(get(adminEndpoint))
                                .andExpect(status().isUnauthorized());
                    } catch (final Exception ex) {
                        throw new RuntimeException(ex);
                    }
                });


        // Assure no user except for admin can access them.
        Stream.of(ADMIN_ENDPOINTS)
                .forEach(adminEndpoint ->
                        getRoles().exclude(Roles.ADMIN).stream()
                            .map(this::roleToNewUser)
                            .forEach(expectForURL(adminEndpoint, HttpStatus.FORBIDDEN.value()))
                );

        // Assure admin can access it.
        Stream.of(ADMIN_ENDPOINTS)
                .forEach(adminEndpoint ->
                        getRoles(Roles.ADMIN).stream()
                                .map(this::roleToNewUser)
                                .forEach(expectIsOkForURL(adminEndpoint))
                );
    }

    /**
     * This test is concerned with assuring ALL '/api/**' paths can only be access by authenticated users.
     * If one '/api/**' controller with no explicit configuration is secured, all are.
     */
    @Test
    public void accessApi() throws Exception {
        final String apiUrl = "/api/user/1/profile";
        when(userService.findById(anyLong())).thenReturn(new UserDTO());
        // Unauthorized for Unauthenticated call
        mockMvc.perform(get(apiUrl))
               .andExpect(status().isUnauthorized());
        // Accessible to all other roles
        getAllRoles()
              .map(this::roleToNewUser)
              .forEach(expectIsOkForURL(apiUrl));
    }

    /**
     * This test is concerned with assuring ALL public endpoints are accessible by anyone.
     */
    @Test
    public void accessPublicResources() throws Exception {
        Stream.of(PUBLIC_ENDPOINTS)
                // no easy and general way to test resources
                .filter(url -> !url.equals("/resources/**"))
                .map(PublicEntryPoint::new)
                .forEach(this::assertPublicResourceIsAccessible);
    }

    private void assertPublicResourceIsAccessible(final PublicEntryPoint entryPoint) {
        try {
            mockMvc.perform(get(entryPoint.url))
                   .andExpect(status().is(entryPoint.expectedResponseStatusCode));
            getAllRoles()
                  .map(this::roleToNewUser)
                  .forEach(expectForURL(entryPoint.url, entryPoint.expectedResponseStatusCode));
        } catch (final Exception checkedEx) {
            throw new RuntimeException(checkedEx);
        }
    }

    private Consumer<UserDTO> expectIsOkForURL(final String url) {
        return expectForURL(url, HttpStatus.OK.value());
    }

    private Consumer<UserDTO> expectForURL(final String apiUrl, final int status) {
        return user -> {
            try {
                when(userService.findById(anyLong())).thenReturn(user);
                if(!isJsonResponse(apiUrl)) {
                    mockMvc.perform(requestAt(get(apiUrl)).forUser(user))
                            .andExpect(status().is(status));
                } else {
                    mockMvc.perform(requestAt(get(apiUrl)).forUser(user))
                            .andExpect(status().isOk())
                            .andExpect(content().string(""));
                }
            } catch(Exception checkedEx) {
                throw new RuntimeException(checkedEx);
            }
        };
    }

    private boolean isJsonResponse(final String apiUrl) {
        return ADMIN_ENDPOINTS[1].equals(apiUrl) || ADMIN_ENDPOINTS[2].equals(apiUrl);
    }

    private Request requestAt(final MockHttpServletRequestBuilder builder) {
        return new Request(builder);
    }

    private UserDTO roleToNewUser(final Roles role) {
        final UserDTO user = new UserDTO();
        user.setId(5L);
        user.setEmail("test@email.com");
        user.setPassword("test-password");
        final RoleDTO roleDTO = new RoleDTO();
        roleDTO.setName(role.name());
        user.setRole(roleDTO);
        return user;
    }

    private class Request {
        private final MockHttpServletRequestBuilder request;
        private Request(final MockHttpServletRequestBuilder request) {
            this.request = request;
        }
        private MockHttpServletRequestBuilder forUser(final UserDTO user) {
            final String token = tokenizer.generate(user);
            final String tokenValue = TOKEN_PREFIX + TOKEN_SEPARATOR + token;
            this.request.header(TOKEN_HEADER, tokenValue);
            return request;
        }
    }

    private class PublicEntryPoint {
        private final String url;
        private final int expectedResponseStatusCode;
        private PublicEntryPoint(final String url) {
            switch (url) {
                case "/":
                    this.expectedResponseStatusCode = HttpStatus.FOUND.value(); break;
                case "/error":
                    this.expectedResponseStatusCode = HttpStatus.INTERNAL_SERVER_ERROR.value(); break;
                default:
                    this.expectedResponseStatusCode = HttpStatus.OK.value(); break;
            }
            this.url = url;
        }
    }

    private class RolesStreamBuilder {
        private Stream<Roles> roles;
        private RolesStreamBuilder() {
            this.roles = Stream.of(Roles.values());
        }

        private RolesStreamBuilder(final Roles... ofRoles) {
            this.roles = Stream.of(ofRoles);
        }
        private RolesStreamBuilder exclude(final Roles excludedRole) {
            roles = roles.filter(role -> !role.equals(excludedRole));
            return this;
        }
        private Stream<Roles> stream() { return roles; }

    }

    private Stream<Roles> getAllRoles() {
        return getRoles().stream();
    }


    private RolesStreamBuilder getRoles() {
        return new RolesStreamBuilder();
    }

    private RolesStreamBuilder getRoles(final Roles... roles) {
        return new RolesStreamBuilder(roles);
    }
}
