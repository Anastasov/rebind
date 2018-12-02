package student.manchester.api.user.bean;

import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.model.card.dto.CardDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/29/2018.
 */
public class UserCardsResponse extends AuthenticatedResponse {

    private List<CardDTO> cards = new ArrayList<>();

    public List<CardDTO> getCards() {
        return cards;
    }

    public void setCards(final List<CardDTO> card) {
        this.cards = card;
    }
}
