package student.manchester.api.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import student.manchester.annotation.Auth;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.api.user.bean.BindResponse;
import student.manchester.api.auth.bean.BindUpdateRequest;
import student.manchester.api.user.bean.ProfileResponse;
import student.manchester.api.auth.bean.UserUpdateRequest;
import student.manchester.api.exception.ApiInputException;
import student.manchester.api.user.bean.UserCardsResponse;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.card.CardService;
import student.manchester.service.user.UserService;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
@RestController
@RequestMapping("/api/user")
public class UserApi {

    @Autowired
    private UserService userService;

    @Autowired
    private CardService cardService;

    @RequestMapping(value = "/{id}/profile", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileResponse> getProfileData(final @Auth JWTUserDetails user,
                                                          final @PathVariable("id") Long id) {
        final UserDTO userData = userService.findById(id);
        final ProfileResponse response = new ProfileResponse();
        response.setUser(userData);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/cards", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserCardsResponse> getCards(final @Auth JWTUserDetails user,
                                                     final @PathVariable("id") Long id) {
        final List<CardDTO> userCards = cardService.getCards(id);
        final UserCardsResponse response = new UserCardsResponse();
        response.setCards(userCards);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/profile", method = RequestMethod.PUT, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileResponse> updateProfileData(final @Auth JWTUserDetails user,
                                                             final @PathVariable("id") Long id,
                                                             final @RequestBody UserUpdateRequest input) {
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

    @RequestMapping(value = "/{id}/bind", method = RequestMethod.POST, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<BindResponse> createBind(final @Auth JWTUserDetails user,
                                                      final @PathVariable("id") Long id,
                                                      final @RequestBody BindUpdateRequest input) {
        final BindResponse response = new BindResponse();
        response.setBind(userService.createBind(id, input));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/bind/{bindId}", method = RequestMethod.PUT, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<BindResponse> updateBind(final @Auth JWTUserDetails user,
                                                   final @PathVariable("id") Long id,
                                                   final @PathVariable("bindId") Long bindId,
                                                   final @RequestBody BindUpdateRequest input) {
        final BindResponse response = new BindResponse();
        response.setBind(userService.updateBind(id, bindId, input));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/bind/{bindId}", method = RequestMethod.DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthenticatedResponse> deleteBind(final @Auth JWTUserDetails user,
                                                      final @PathVariable("id") Long id,
                                                      final @PathVariable("bindId") Long bindId) {

        userService.deleteBind(id, bindId);
        return new ResponseEntity<>(new AuthenticatedResponse(), HttpStatus.OK);
    }

    private String getUpdatedField(final UserUpdateRequest input) {
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
