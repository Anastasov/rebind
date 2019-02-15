package student.manchester.common;

import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.dao.card.CardDao;
import student.manchester.dao.user.BindDao;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.dao.user.ProtectedUserDao;
import student.manchester.dao.user.UserDao;
import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.card.Card;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;

/**
 * @author Anastas Anastasov
 * on 2/8/2019.
 */
public abstract class ProvisioningH2DBTest extends H2DBTest {

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProtectedUserDao protectedUserDao;

    @Autowired
    private ProtectedBindDao protectedBindDao;

    @Autowired
    private CardDao cardDao;

    @Autowired
    private BindDao bindDao;

    protected ProtectedBind createProtectedBind(final Bind bind) {
        final ProtectedBind protectedBind = new ProtectedBind();
        protectedBind.setBindCheck(Boolean.TRUE);
        protectedBind.setBind(bind);
        protectedBindDao.save(protectedBind);
        return protectedBind;
    }

    protected ProtectedUser createProtectedUser(final User user) {
        final ProtectedUser protectedUser = new ProtectedUser();
        protectedUser.setUser(user);
        protectedUser.setUsernameCheck(Boolean.TRUE);
        protectedUser.setFirstNameCheck(Boolean.TRUE);
        protectedUser.setLastNameCheck(Boolean.TRUE);
        protectedUser.setEmailCheck(Boolean.TRUE);
        protectedUser.setPostcodeCheck(Boolean.TRUE);
        protectedUser.setPhoneCheck(Boolean.TRUE);
        protectedUserDao.save(protectedUser);
        return protectedUser;
    }

    protected Card createCard(final ProtectedUser protectedUser) {
        final Card card = new Card();
        card.setName("test_card");
        card.setUser(protectedUser);
        cardDao.save(card);
        return card;
    }

    protected User createUser() {
        final User user = new User();
        user.setUsername("test");
        user.setEmail("test@email.com");
        user.setPassword("testpassword");
        userDao.save(user);
        return user;
    }

    protected Bind createBind(final User user) {
        final Bind bind = new Bind();
        bind.setUser(new User());
        bind.setUrl("http//:test");
        bind.setIcon("icon:test");
        bind.setName("test");
        bind.setUser(user);
        bindDao.save(bind);
        return bind;
    }
}
