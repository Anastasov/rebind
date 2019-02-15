package student.manchester.unit.dao.card;

import student.manchester.common.ProvisioningH2DBTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.dao.card.CardDao;
import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.card.Card;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;

import java.util.List;

import static org.junit.Assert.assertTrue;
import static student.manchester.util.AssertUtil.areTheSame;
import static student.manchester.util.AssertUtil.isNotEmpty;

/**
 * @author Anastas Anastasov
 * on 2/8/2019.
 */
public class CardDaoTest extends ProvisioningH2DBTest {

    @Autowired
    private CardDao cardDao;

    @Test
    public void getCardsTest() {
        final User user = createUser();
        final Bind bind = createBind(user);
        final ProtectedBind protectedBind = createProtectedBind(bind);
        final ProtectedUser protectedUser = createProtectedUser(user);
        final Card card = createCard(protectedUser);
        final List<Card> userCards = cardDao.getCards(user.getId());
        assertTrue("No cards found for user.", isNotEmpty(userCards));
        final Card expectedCard = userCards.size() == 1 ? userCards.get(0) : null;
        assertTrue("Found card didn't match.", areTheSame(card, expectedCard));
    }
}
