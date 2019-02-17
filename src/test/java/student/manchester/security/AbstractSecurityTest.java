package student.manchester.security;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import student.manchester.configuration.JWTSecurityConfiguration;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.JWTTokenizerService;
import student.manchester.service.user.UserService;

import java.util.function.Consumer;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_HEADER;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_PREFIX;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_SEPARATOR;

/**
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
@RunWith(SpringRunner.class)
@Import(JWTSecurityConfiguration.class)
@WebMvcTest
public abstract class AbstractSecurityTest {

    @MockBean
    protected UserService userService;

    @Autowired
    protected MockMvc mockMvc;

    @Autowired
    protected JWTTokenizerService tokenizer;

    protected static final ObjectMapper mapper = new ObjectMapper();

    protected Request requestAt(final MockHttpServletRequestBuilder builder) {
        return new Request(builder);
    }

    public class Request {
        private final MockHttpServletRequestBuilder request;
        public Request(final MockHttpServletRequestBuilder request) {
            this.request = request;
        }
        public MockHttpServletRequestBuilder forUser(final UserDTO user) {
            final String token = tokenizer.generate(user);
            final String tokenValue = TOKEN_PREFIX + TOKEN_SEPARATOR + token;
            this.request.header(TOKEN_HEADER, tokenValue);
            return request;
        }
    }

    protected Consumer<UserDTO> expectResponseStatus(final MockHttpServletRequestBuilder request, final int status) {
        return user -> {
            try {
                when(userService.findById(user.getId())).thenReturn(user);
                mockMvc.perform(
                        requestAt(request)
                                .forUser(user))
                        .andExpect(status().is(status));
            } catch(Exception checkedEx) {
                throw new RuntimeException(checkedEx);
            }
        };
    }

    protected MockHttpServletRequestBuilder putRequest(final String apiUrl, final Object input) {
        try {
            return put(apiUrl)
                    .contentType(MediaType.APPLICATION_JSON_VALUE)
                    .content(mapper.writeValueAsBytes(input));
        } catch (final JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }

    protected MockHttpServletRequestBuilder getRequest(final String apiUrl) {
        return get(apiUrl);
    }

    protected MockHttpServletRequestBuilder postRequest(final String apiUrl, final Object input) {
        try {
            return post(apiUrl)
                    .contentType(MediaType.APPLICATION_JSON_VALUE)
                    .content(mapper.writeValueAsBytes(input));
        } catch (final JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }

    protected MockHttpServletRequestBuilder deleteRequest(final String apiUrl) {
        return deleteRequest(apiUrl, null);
    }

    protected MockHttpServletRequestBuilder deleteRequest(final String apiUrl, final Object input) {
        try {
            return input == null ?
                    delete(apiUrl) :
                    delete(apiUrl)
                    .contentType(MediaType.APPLICATION_JSON_VALUE)
                    .content(mapper.writeValueAsBytes(input));
        } catch (final JsonProcessingException ex) {
            throw new RuntimeException(ex);
        }
    }
}
