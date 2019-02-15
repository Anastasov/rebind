package student.manchester.api.card.bean;

import student.manchester.api.common.bean.AuthenticatedResponse;
import student.manchester.model.card.dto.CardDTO;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class CardResponse extends AuthenticatedResponse {

    private CardDTO card;

    public CardDTO getCard() {
        return card;
    }

    public void setCard(final CardDTO card) {
        this.card = card;
    }
}
