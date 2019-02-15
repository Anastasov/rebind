package student.manchester.unit.dao.user;

import student.manchester.common.ProvisioningH2DBTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.dao.user.BindDao;
import student.manchester.dao.user.ProtectedBindDao;
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
public class ProtectedBindDaoTest extends ProvisioningH2DBTest {

    @Autowired
    private BindDao bindDao;

    @Autowired
    private ProtectedBindDao protectedBindDao;

    @Test
    public void loadByBindIdTest() {
        final User user = createUser();
        final Bind bind = createBind(user);
        final ProtectedBind protectedBind = createProtectedBind(bind);
        final ProtectedUser protectedUser = createProtectedUser(user);
        final Card card = createCard(protectedUser);

        final List<ProtectedBind> protectedBinds = protectedBindDao.loadByBindId(bind.getId());
        assertTrue("Didn't retrive ProtectedBinds by bind Id.", isNotEmpty(protectedBinds));
        final ProtectedBind expectedResult = protectedBinds.size() == 1 ? protectedBinds.get(0) : null;
        assertTrue("Didn't retrive ProtectedBinds by bind Id.", areTheSame(protectedBind, expectedResult));
    }


}
