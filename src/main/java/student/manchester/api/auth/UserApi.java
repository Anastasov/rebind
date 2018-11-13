package student.manchester.api.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import student.manchester.annotation.Auth;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.api.auth.bean.ProfileResponse;
import student.manchester.api.auth.bean.UpdateUserInput;
import student.manchester.api.exception.ApiInputException;
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
        response.setUser(userData);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "{id}/profile/update", method = RequestMethod.POST, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileResponse> updateProfileData(final @Auth JWTUserDetails user,
                                                             final @PathVariable("id") Long id,
                                                             final @RequestBody UpdateUserInput input) {
        final ProfileResponse response = new ProfileResponse();
        try {
            final UserDTO userData = userService.updateUser(id, input);
            response.setUser(userData);
        } catch(final Exception exception) {
            final String changedDatum = getUpdatedField(input);
            throw new ApiInputException.Builder()
                    .addError(changedDatum, "Update failed.")
                    .build();
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private String getUpdatedField(final UpdateUserInput input) {
        final String field;
        if(input.getEmail() != null) {
            field = "email";
        } else if(input.getFirstName() != null) {
            field = "firstName";
        } else if(input.getLastName() != null) {
            field = "lastName";
        } else if(input.getPhone() != null) {
            field = "phone";
        } else if(input.getPostcode() != null) {
            field = "postcode";
        } else if(input.getUsername() != null) {
            field = "username";
        } else {
            field = "";
        }

        return field;
    }
}
