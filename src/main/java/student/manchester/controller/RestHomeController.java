package student.manchester.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.api.exception.ApiInputException;
import student.manchester.configuration.security.wrapper.JWTAuthenticationToken;
import student.manchester.controller.bean.AuthenticationForm;
import student.manchester.controller.bean.LoginResponse;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.AuthenticationService;
import student.manchester.service.auth.UserService;
import student.manchester.service.auth.exception.LogicException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
@RestController
public class RestHomeController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationService authenticationService;

    /* ----------------------- NO AUTHORIZATION REQUIRED ----------------------- */
    @RequestMapping(value = "/signUp", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity signUp(@RequestBody final AuthenticationForm authenticationForm) {
        final UserDTO userData = userService
                .createUser(authenticationForm.getUsername(), authenticationForm.getPassword());
        final Optional<String> token = authenticationService.generateTokenForUser(userData.getId());
        final LoginResponse authResponse = new LoginResponse(
                createAuthResponse(token, "Sign Up Successful", userData));
        authResponse.setEmail(userData.getEmail());
        authResponse.setId(userData.getId());
        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity login(@RequestBody final AuthenticationForm authenticationForm) {
        final UserDTO userData = userService
                .getUserByCredentials(authenticationForm.getUsername(), authenticationForm.getPassword());
        validateUserExists(userData);
        final Optional<String> token = authenticationService.generateTokenForUser(userData.getId());
        final LoginResponse authResponse = new LoginResponse(
                createAuthResponse(token, "Login Successful", userData));
        authResponse.setEmail(userData.getEmail());
        authResponse.setId(userData.getId());
        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    private void validateUserExists(final UserDTO userData) {
        if(userData.getId() == null) {
            throw new ApiInputException.Builder()
                    .setMessage("Authentication failed.")
                    .addError("email", "Incorrect credentials")
                    .addError("password", "Incorrect credentials")
                    .build();
        }
    }

    private AuthenticatedResponse createAuthResponse(final Optional<String> token,
                                                     final String message,
                                                     final UserDTO userData) {
        if(!token.isPresent()) {
            throw new LogicException("Server couldn't create token for: " + userData.getEmail());
        }
        final AuthenticatedResponse authenticatedResponse = new AuthenticatedResponse();
        token.ifPresent(authenticatedResponse::setToken);
        token.ifPresent(token_ -> authenticatedResponse.setOk(true));
        token.ifPresent(token_ -> authenticatedResponse.setMessage(message));
        return authenticatedResponse;
    }

}
