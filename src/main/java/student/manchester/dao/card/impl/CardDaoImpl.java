package student.manchester.dao.card.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.card.CardDao;
import student.manchester.model.card.Card;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Repository
public class CardDaoImpl extends GenericDaoHibernate<Card, Long> implements CardDao {

    @Override
    public List<Card> getCards(final Long userId) {
        final CriteriaBuilder builder = getCriteriaBuilder();
        final CriteriaQuery<Card> criteria = createQuery();
        final Root<Card> table = criteria.from(Card.class);
        criteria.select(table)
                .where(builder.equal(getAssociation(table, "user.user.id"), userId))
                .orderBy(builder.desc(table.get("id")));
        return getList(criteria);
    }
}
