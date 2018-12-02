package student.manchester.service.card;

import student.manchester.api.card.bean.CardCreateRequest;
import student.manchester.api.card.bean.CardUpdateRequest;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.dto.UserDTO;

import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public interface CardService {

    CardDTO findById(Long id);

    CardDTO updateCard(Long id, CardUpdateRequest input);

    CardDTO createCard(Long userId, CardCreateRequest input);

    boolean deleteCard(Long id);

    List<CardDTO> getCards(Long userId);
}
