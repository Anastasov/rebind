package student.manchester.api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import student.manchester.annotation.Auth;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.service.auth.AuthenticationService;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
@RestController
@RequestMapping("/api/user/")
public class UserApi {

    @Autowired
    private AuthenticationService authenticationService;

    @RequestMapping(value = "profile", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthenticatedResponse> getProfileData() {
        final AuthenticatedResponse response = new AuthenticatedResponse();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
