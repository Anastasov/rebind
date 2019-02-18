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
import student.manchester.api.common.bean.AuthenticatedResponse;
import student.manchester.api.user.bean.BindResponse;
import student.manchester.api.user.bean.BindUpdateRequest;
import student.manchester.api.user.bean.ProfileResponse;
import student.manchester.api.user.bean.UserUpdateRequest;
import student.manchester.api.common.exception.ApiInputException;
import student.manchester.api.user.bean.UserCardsResponse;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.auth.Role;
import student.manchester.model.auth.Roles;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.card.CardService;
import student.manchester.service.user.UserService;
import student.manchester.util.AuthUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static student.manchester.util.AuthUtil.checkAuthorizedUser;

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


    /* ------------------------------ PROFILE_DATA ------------------------------ */
    @RequestMapping(value = "/{id}/profile", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileResponse> getProfileData(final @Auth JWTUserDetails user,
                                                          final @PathVariable("id") Long id) {
        checkAuthorizedUser(user, id);
        final UserDTO userData = userService.findById(id);
        final ProfileResponse response = new ProfileResponse();
        response.setUser(userData);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/profile", method = RequestMethod.PUT, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<ProfileResponse> updateProfileData(final @Auth JWTUserDetails user,
                                                             final @PathVariable("id") Long id,
                                                             final @RequestBody UserUpdateRequest input) {
        checkAuthorizedUser(user, id);
        final ProfileResponse response = new ProfileResponse();
        try {
            final UserDTO userData = userService.updateUser(id, input);
            response.setUser(userData);
        } catch(final Exception exception) {
            final ApiInputException.Builder exceptionBuilder = new ApiInputException.Builder();
            getUpdatedFields(input)
                    .forEach(changedDatum ->
                            exceptionBuilder.addError(changedDatum, "Update failed."));
            throw exceptionBuilder.build();
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    /* ---------------------------------- BIND ---------------------------------- */

    @RequestMapping(value = "/{id}/bind", method = RequestMethod.POST, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<BindResponse> createBind(final @Auth JWTUserDetails user,
                                                   final @PathVariable("id") Long id,
                                                   final @RequestBody BindUpdateRequest input) {
        checkAuthorizedUser(user, id);
        final BindResponse response = new BindResponse();
        response.setBind(userService.createBind(id, input));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/bind/{bindId}", method = RequestMethod.PUT, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<BindResponse> updateBind(final @Auth JWTUserDetails user,
                                                   final @PathVariable("id") Long id,
                                                   final @PathVariable("bindId") Long bindId,
                                                   final @RequestBody BindUpdateRequest input) {
        checkAuthorizedUser(user, id);
        final BindResponse response = new BindResponse();
        response.setBind(userService.updateBind(id, bindId, input));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}/bind/{bindId}", method = RequestMethod.DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthenticatedResponse> deleteBind(final @Auth JWTUserDetails user,
                                                      final @PathVariable("id") Long id,
                                                      final @PathVariable("bindId") Long bindId) {
        checkAuthorizedUser(user, id);
        userService.deleteBind(id, bindId);
        return new ResponseEntity<>(new AuthenticatedResponse(), HttpStatus.OK);
    }

    /* ---------------------------------- CARD ---------------------------------- */

    @RequestMapping(value = "/{id}/cards", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserCardsResponse> getCards(final @Auth JWTUserDetails user,
                                                      final @PathVariable("id") Long id) {
        checkAuthorizedUser(user, id);
        final List<CardDTO> userCards = cardService.getCards(id);
        final UserCardsResponse response = new UserCardsResponse();
        response.setCards(userCards);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private List<String> getUpdatedFields(final UserUpdateRequest input) {
        final List<String> fields = new ArrayList<>();

        if(Optional.ofNullable(input.getEmail()).isPresent()) {
            fields.add("email");
        }
        if(Optional.ofNullable(input.getFirstName()).isPresent()) {
            fields.add("firstName");
        }
        if(Optional.ofNullable(input.getLastName()).isPresent()) {
            fields.add("lastName");
        }
        if(Optional.ofNullable(input.getPhone()).isPresent()) {
            fields.add("phone");
        }
        if(Optional.ofNullable(input.getPostcode()).isPresent()) {
            fields.add("postcode");
        }
        if(Optional.ofNullable(input.getUsername()).isPresent()) {
            fields.add("username");
        }
        return fields;
    }
}
