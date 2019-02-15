package student.manchester.unit.dao.user;

import student.manchester.common.H2DBTest;
import org.hibernate.exception.ConstraintViolationException;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.dao.auth.RoleDao;
import student.manchester.dao.user.BindDao;
import student.manchester.dao.user.UserDao;
import student.manchester.model.auth.Role;
import student.manchester.model.bind.Bind;
import student.manchester.model.user.User;

import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static student.manchester.util.AssertUtil.areTheSame;
import static student.manchester.util.AssertUtil.assertExceptionIsNotThrown;
import static student.manchester.util.AssertUtil.assertExceptionIsThrown;
import static student.manchester.util.AssertUtil.isNotEmpty;

/**
 * @author Anastas Anastasov
 * on 2/5/2019.
 */
public class UserDaoTest extends H2DBTest {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private BindDao bindDao;

    /* ----------------------------- SAVE USER ----------------------------- */
    @Test
    public void saveUser() {
        final User user = getAcceptableUser();
        assertExceptionIsNotThrown(() -> userDao.save(user));
        areTheSame(user, userDao.findBy(user.getEmail(), user.getPassword()));
    }

    @Test
    public void saveFullUser() {
        final User user = getAcceptableUser();
        user.setUsername("aanastasov");
        user.setFirstName("Anastas");
        user.setLastName("Anastasov");
        user.setPhone("691-691");
        user.setPostcode("M14 7LH");
        setUserRole(user);
        setUserBinds(user);
        user.setLastAuthLogout(Calendar.getInstance().getTime());
        assertExceptionIsNotThrown(() -> userDao.save(user));
        areTheSame(user, userDao.findBy(user.getEmail(), user.getPassword()));
    }

    private void setUserBinds(final User user) {
        final List<Bind> binds = Stream
                .of("Facebook", "Instagram", "Youtube")
                .map(this::createBind)
                .collect(Collectors.toList());
        binds.forEach(bind -> bindDao.save(bind));
        user.setBinds(binds);
    }

    private Bind createBind(final String bindName) {
        final Bind bind = new Bind();
        bind.setName(bindName);
        bind.setUrl("http://" + bindName);
        bind.setIcon("icon:" + bindName);
        return bind;
    }

    private void setUserRole(final User user) {
        final Role role = new Role();
        role.setName("test-role");
        roleDao.save(role);
        user.setRole(role);
    }

    @Test
    public void saveUserWithoutEmail() {
        final User user = getAcceptableUser();
        // Cannot create a user without e-mail
        user.setEmail(null);
        assertExceptionIsThrown(() -> userDao.save(user), ConstraintViolationException.class);
    }

    @Test
    public void saveUserWithoutPassword() {
        final User user = getAcceptableUser();
        // Cannot create a user without password
        user.setPassword(null);
        assertExceptionIsThrown(() -> userDao.save(user), ConstraintViolationException.class);
    }

    private User getAcceptableUser() {
        final User user = new User();
        user.setPassword("password");
        user.setEmail("test@test.com");
        return user;
    }

    /* ------------------------ FIND USER BY E-MAIL ------------------------ */
    @Test
    public void findUserWithEmail() {
        final User user = getAcceptableUser();
        assertFalse("Expected not to find user with e-mail '" + user.getEmail() + "', but it did.",
                userDao.existsUserWithEmail(user.getEmail()));
        assertExceptionIsNotThrown(() -> userDao.save(user));
        assertTrue("Expected to find user with e-mail '" + user.getEmail() + "', but it didn't.",
                userDao.existsUserWithEmail(user.getEmail()));
    }

    /* ----------------- FIND USER BY E-MAIL AND PASSWORD ------------------ */
    @Test
    public void findUserByEmailAndPassword() {
        final User user = getAcceptableUser();
        assertFalse("Expected not to find user with e-mail '" + user.getEmail()
                        + "' and password '" + user.getPassword() +"', but it did.",
                areTheSame(user, userDao.findBy(user.getEmail(), user.getPassword())));
        assertExceptionIsNotThrown(() -> userDao.save(user));
        assertTrue("Expected to find user with e-mail '" + user.getEmail()
                        + "' and password '" + user.getPassword() +"', but it didn't.",
                areTheSame(user, userDao.findBy(user.getEmail(), user.getPassword())));
    }

    /* ------------------- FIND USER BY USERNAME PREFIX -------------------- */
    @Test
    public void findUserByUsernamePrefix() {
        final User user = getAcceptableUser();
        final String username = "aanastas";
        final String usernamePrefix = username.substring(0, 4);
        assertFalse("Expected not to find user with username starting with '"
                        + usernamePrefix + "', but it did.",
                areTheSame(user, userDao.findByUsernameStarting(usernamePrefix)));
        user.setUsername(username);
        assertExceptionIsNotThrown(() -> userDao.save(user));
        final List<User> foundUsers = userDao.findByUsernameStarting(usernamePrefix);
        assertTrue("Expected to find user with username starting with '"
                + usernamePrefix + "', but it didn't.",
                isNotEmpty(foundUsers) && foundUsers.size() == 1);
        assertTrue("Expected to find the SAME user when looking for username starting with '"
                        + usernamePrefix + "', but it didn't.",
                areTheSame(user, foundUsers.get(0)));

        // Test Finding 2 people (and include distractor)
        // Save other users
        final User secondUser = getAcceptableUser();
        final String secondUsername = usernamePrefix + "fuego";
        secondUser.setUsername(secondUsername);
        assertExceptionIsNotThrown(() -> userDao.save(secondUser));
        // The distractor is a user not meeting the prefix condition
        final User distractorUser = getAcceptableUser();
        final String distractor = "distractor";
        distractorUser.setUsername(distractor);
        assertExceptionIsNotThrown(() -> userDao.save(distractorUser));

        final List<User> allPrefixedUsers = userDao.findByUsernameStarting(usernamePrefix);
        assertTrue("Expected to find two users with username starting with '"
                        + usernamePrefix + "', but it didn't.",
                isNotEmpty(allPrefixedUsers) && allPrefixedUsers.size() == 2);
    }

    private void attomicSave(final User user) {
        userDao.save(user);
    }
}
