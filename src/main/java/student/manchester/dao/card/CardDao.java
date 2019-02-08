package student.manchester.dao.card;

import student.manchester.dao.GenericDao;
import student.manchester.model.card.Card;

import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public interface CardDao extends GenericDao<Card, Long> {

    List<Card> getCards(Long userId);
}
