package student.manchester.api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import student.manchester.annotation.Auth;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.api.auth.bean.ProfileResponse;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.controller.bean.LoginResponse;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.AuthenticationService;
import student.manchester.service.auth.UserService;
import student.manchester.service.auth.exception.LogicException;

import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
@RestController
@RequestMapping("/api/user/")
public class UserApi {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "{id}/profile", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileResponse> getProfileData(final @Auth JWTUserDetails user,
                                                          final @PathVariable("id") Long id) {
        final UserDTO userData = userService.findById(id);
        final ProfileResponse response = new ProfileResponse();
        response.setEmail(userData.getEmail());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
