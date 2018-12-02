package student.manchester.api.card;

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
import student.manchester.api.auth.bean.UserUpdateRequest;
import student.manchester.api.card.bean.CardCreateRequest;
import student.manchester.api.card.bean.CardResponse;
import student.manchester.api.card.bean.CardUpdateRequest;
import student.manchester.api.exception.ApiInputException;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.service.card.CardService;

import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
@RestController
@RequestMapping("/api/card")
public class CardApi {

    @Autowired
    private CardService cardService;

    @RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<CardResponse> getCardData(final @Auth JWTUserDetails user,
                                                    final @PathVariable("id") Long id) {
        final CardDTO cardData = cardService.findById(id);
        final CardResponse response = new CardResponse();
        response.setCard(cardData);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<CardResponse> createCard(final @Auth JWTUserDetails user,
                                                   final @RequestBody CardCreateRequest input) {
        final CardResponse response = new CardResponse();
        try {
            final CardDTO card = cardService.createCard(input.getUserId(), input);
            response.setCard(card);
        } catch(final Exception exception) {
            final String changedDatum = null;
            throw new ApiInputException.Builder()
                    .addError(changedDatum, "Creating a card failed.")
                    .build();
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT, produces = APPLICATION_JSON_VALUE, consumes=APPLICATION_JSON_VALUE)
    public ResponseEntity<CardResponse> updateCard(final @Auth JWTUserDetails user,
                                                   final @PathVariable("id") Long id,
                                                   final @RequestBody CardUpdateRequest input) {
        final CardResponse response = new CardResponse();
        try {
            final CardDTO card = cardService.updateCard(id, input);
            response.setCard(card);
        } catch(final Exception exception) {
            final String changedDatum = getUpdatedField(input);
            throw new ApiInputException.Builder()
                    .addError(changedDatum, "Update failed.")
                    .build();
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthenticatedResponse> deleteCard(final @Auth JWTUserDetails user,
                                                            final @PathVariable("id") Long id) {
        cardService.deleteCard(id);
        return new ResponseEntity<>(new AuthenticatedResponse(), HttpStatus.OK);
    }

    private String getUpdatedField(final CardUpdateRequest input) {
        final String field;
        if(input.getName() != null) {
            field = "name";
        } else {
            field = "";
        }

        return field;
    }
}
