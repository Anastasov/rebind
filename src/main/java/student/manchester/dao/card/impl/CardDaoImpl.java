package student.manchester.dao.card.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.card.CardDao;
import student.manchester.model.card.Card;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.io.Serializable;
import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Repository
public class CardDaoImpl extends GenericDaoHibernate<Card, Long> implements CardDao {

    @Override
    public Serializable save(final Card card) {
        setAssociations(card);
        return super.save(card);
    }

    private void setAssociations(final Card card) {
        final ProtectedUser user = card.getUser();
        if(user != null && user.getCard() == null) {
            user.setCard(card);
        }
    }

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
