package student.manchester.unit.service.auth;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.security.authentication.AuthenticationManager;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.AuthenticationService;
import student.manchester.service.auth.JWTTokenizerService;
import student.manchester.service.auth.impl.AuthenticationServiceImpl;
import student.manchester.service.user.UserService;
import student.manchester.util.AuthUtil;

import java.util.Optional;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

/**
 * @author Anastas Anastasov
 * on 2/7/2019.
 */
@RunWith(MockitoJUnitRunner.class)
public class AuthenticationServiceTest {

    @Spy
    private JWTTokenizerService jwtTokenizer;

    @Mock
    private UserService userService;

    @Mock
    private AuthenticationManager authenticationManager;

    @InjectMocks
    private AuthenticationService authenticationService = new AuthenticationServiceImpl();

    @Test
    public void generateTokenForUserTest() {
        final UserDTO userDTO = getAcceptableUserDTO();
        when(userService.findById(userDTO.getId()))
                .thenReturn(userDTO);
        final Optional<String> token = authenticationService.generateTokenForUser(userDTO.getId());
        assertTrue("Token was not generated.", token.isPresent());
    }

    private UserDTO getAcceptableUserDTO() {
        final UserDTO userDTO = new UserDTO();
        userDTO.setId(5L);
        final RoleDTO role = new RoleDTO();
        role.setName("test-role");
        userDTO.setRole(role);
        userDTO.setEmail("test@email.com");
        userDTO.setPassword("password");
        return userDTO;
    }
}
