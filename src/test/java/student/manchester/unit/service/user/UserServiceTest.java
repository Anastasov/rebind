package student.manchester.unit.service.user;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import student.manchester.api.user.bean.BindUpdateRequest;
import student.manchester.api.user.bean.UserUpdateRequest;
import student.manchester.dao.auth.RoleDao;
import student.manchester.dao.user.BindDao;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.dao.user.ProtectedUserDao;
import student.manchester.dao.user.UserDao;
import student.manchester.model.auth.Role;
import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.bind.BindValidator;
import student.manchester.service.exception.LogicException;
import student.manchester.service.user.UserService;
import student.manchester.service.user.UserValidator;
import student.manchester.service.user.impl.UserServiceImpl;

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static student.manchester.util.AssertUtil.areTheSame;
import static student.manchester.util.AssertUtil.assertExceptionIsThrown;

/**
 * @author Anastas Anastasov
 * on 2/7/2019.
 */
@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {

    private static final String EMAIL = "test@email.com";
    private static final String PASSWORD = "test%Password234";
    private static final String FIRST_NAME = "Negan";
    private static final String LAST_NAME = "Xen";
    private static final String PHONE = "069-069";
    private static final long BIND_ID = 5L;
    private static final long USER_ID = 3L;

    @Mock
    private UserDao userDao;

    @Mock
    private BindDao bindDao;

    @Mock
    private RoleDao roleDao;

    @Mock
    private ProtectedUserDao protectedUserDao;

    @Mock
    private ProtectedBindDao protectedBindDao;

    @Mock
    private UserValidator validator;

    @Mock
    private BindValidator bindValidator;

    @InjectMocks
    private UserService userService = new UserServiceImpl();

    @Test
    public void createUserTest() {
        when(userDao.findByUsernameStarting(any()))
                .thenReturn(Collections.emptyList());
        when(userDao.save(any())).thenReturn(1L);
        when(roleDao.getRoleByName(any())).thenReturn(new Role());
        final UserDTO userDTO = userService.createUser(EMAIL, PASSWORD);
        assertNotNull("UserDTO was not created.", userDTO);
        assertTrue("Created user email didn't match.",
                EMAIL.equals(userDTO.getEmail()));
        assertTrue("Created user password didn't match.",
                PASSWORD.equals(userDTO.getPassword()));
        assertNotNull("Created user doesn't have username.",
                userDTO.getUsername());
    }

    @Test
    public void findByIdTest() {
        final User user = new User();
        user.setEmail(EMAIL);
        when(userDao.get(anyLong())).thenReturn(user);
        final UserDTO userDTO = userService.findById(BIND_ID);
        assertNotNull("UserDTO was not found.", userDTO);
        assertTrue("Created user email didn't match.",
                EMAIL.equals(userDTO.getEmail()));
    }

    @Test
    public void getUserByCredentialsTest() {
        when(userDao.findBy(anyString(), anyString())).thenReturn(null);
        assertExceptionIsThrown(() -> userService.getUserByCredentials(EMAIL, PASSWORD),
                LogicException.class);
        final User user = new User();
        user.setEmail(EMAIL);
        user.setPassword(PASSWORD);
        when(userDao.findBy(anyString(), anyString())).thenReturn(user);
        final UserDTO userDTO = userService.getUserByCredentials(EMAIL, PASSWORD);
        assertNotNull("UserDTO was not found.", userDTO);
        assertTrue("Found user email didn't match.",
                EMAIL.equals(userDTO.getEmail()));
        assertTrue("Found user password didn't match.",
                PASSWORD.equals(userDTO.getPassword()));
    }

    @Test
    public void generateUsernameFromEmailTest() {
        // test for non-existing usernames
        when(userDao.findByUsernameStarting(anyString()))
                .thenReturn(Collections.EMPTY_LIST);
        String username = userService.generateUsernameFromEmail(EMAIL);
        assertTrue("Username was not generated correctly: " + username,
                username != null && !username.isEmpty());

        // test for existing usernames
        final User existingUser = new User();
        existingUser.setUsername(EMAIL.split("@")[0]);
        when(userDao.findByUsernameStarting(anyString()))
                .thenReturn(Arrays
                        .asList(existingUser, existingUser, existingUser, existingUser));
        username = userService.generateUsernameFromEmail(EMAIL);
        assertTrue("Username was not generated correctly: " + username,
                username != null && !username.isEmpty());
    }

    @Test
    public void updateUserTest() {
        final UserUpdateRequest update = new UserUpdateRequest();
        update.setEmail(EMAIL);
        update.setFirstName(FIRST_NAME);
        update.setLastName(LAST_NAME);
        update.setPhone(PHONE);
        when(userDao.get(5L)).thenReturn(null);
        assertExceptionIsThrown(() -> userService.updateUser(BIND_ID, update),
                LogicException.class);
        when(userDao.get(5L)).thenReturn(new User());
        final UserDTO updatedUser = userService.updateUser(BIND_ID, update);
        assertNotNull("User wasn't updated.", updatedUser);
        assertTrue("Email wasn't updated.", EMAIL.equals(updatedUser.getEmail()));
        assertTrue("First name wasn't updated.", FIRST_NAME.equals(updatedUser.getFirstName()));
        assertTrue("Last name wasn't updated.", LAST_NAME.equals(updatedUser.getLastName()));
        assertTrue("Phone wasn't updated.", PHONE.equals(updatedUser.getPhone()));
    }

    @Test
    public void createBindTest() {
        final BindUpdateRequest bind = new BindUpdateRequest();
        bind.setName(EMAIL);
        bind.setIcon(FIRST_NAME);
        bind.setUrl(LAST_NAME);
        when(bindDao.save(any())).thenReturn(BIND_ID);
        // test it cannot be created for no user
        when(userDao.get(5L)).thenReturn(null);
        assertExceptionIsThrown(() -> userService.createBind(BIND_ID, bind),
                LogicException.class);
        // set user
        when(userDao.get(5L)).thenReturn(new User());
        final BindDTO bindDTO = userService.createBind(BIND_ID, bind);
        assertNotNull("Bind wasn't created.", bindDTO);
        assertTrue("Name didn't match.", EMAIL.equals(bindDTO.getName()));
        assertTrue("Icon didn't match.", FIRST_NAME.equals(bindDTO.getIcon()));
        assertTrue("Url didn't match.", LAST_NAME.equals(bindDTO.getUrl()));
    }

    @Test
    public void updateBindTest() {
        final BindUpdateRequest bind = new BindUpdateRequest();
        bind.setName(EMAIL);
        bind.setIcon(FIRST_NAME);
        bind.setUrl(LAST_NAME);
        // test it cannot be created for no bind
        when(bindDao.get(any())).thenReturn(null);
        assertExceptionIsThrown(() -> userService.updateBind(USER_ID, BIND_ID, bind),
                LogicException.class);
        // set user
        when(bindDao.get(any())).thenReturn(new Bind());
        final BindDTO bindDTO = userService.updateBind(USER_ID, BIND_ID, bind);
        assertNotNull("Bind wasn't updated.", bindDTO);
        assertTrue("Name wasn't updated.", EMAIL.equals(bindDTO.getName()));
        assertTrue("Icon wasn't updated.", FIRST_NAME.equals(bindDTO.getIcon()));
        assertTrue("Url wasn't updated.", LAST_NAME.equals(bindDTO.getUrl()));
    }

    @Test
    public void deleteBindTest() {
        final User user = new User();
        final Bind bind = new Bind();
        bind.setId(BIND_ID);
        user.setBinds(Stream.of(bind).collect(Collectors.toList()));
        // test it cannot be created for no bind
        when(userDao.get(USER_ID)).thenReturn(null);
        boolean deleteWasSuccessful = userService.deleteBind(USER_ID, BIND_ID);
        assertFalse("Delete was successful", deleteWasSuccessful);
        // set user
        when(userDao.get(USER_ID)).thenReturn(user);
        deleteWasSuccessful = userService.deleteBind(USER_ID, BIND_ID);
        assertTrue("Delete wasn't successful", deleteWasSuccessful);
    }

    @Test
    public void createProtectedUserTest() {
        final User user = new User();
        final Bind bind = new Bind();
        bind.setId(BIND_ID);
        user.setBinds(Stream.of(bind).collect(Collectors.toList()));
        // test it cannot be created for no user
        when(userDao.get(USER_ID)).thenReturn(null);
        assertExceptionIsThrown(() -> userService.createProtectedUser(USER_ID),
                LogicException.class);
        when(userDao.get(USER_ID)).thenReturn(user);
        when(protectedUserDao.save(any())).thenReturn(USER_ID);
        final ProtectedUser protectedUser = userService.createProtectedUser(USER_ID);
        assertNotNull("ProtectedUser was not created.", protectedUser);
        assertTrue(areTheSame(protectedUser.getUser(), user));
        assertTrue("Email was left unprotected.", protectedUser.getEmailCheck());
        assertTrue("FirstName was left unprotected.", protectedUser.getFirstNameCheck());
        assertTrue("LastName was left unprotected.", protectedUser.getLastNameCheck());
        assertTrue("Phone was left unprotected.", protectedUser.getPhoneCheck());
        assertTrue("Postcode was left unprotected.", protectedUser.getPostcodeCheck());
        assertTrue("Username was left unprotected.", protectedUser.getUsernameCheck());
    }

    @Test
    public void createProtectedBindTest() {
        final Bind bind = new Bind();
        bind.setId(BIND_ID);
        // test it cannot be created for no bind
        assertExceptionIsThrown(() -> userService.createProtectedBind(null),
                LogicException.class);
        when(protectedBindDao.save(any())).thenReturn(USER_ID);
        final ProtectedBind protectedBind = userService.createProtectedBind(bind);
        assertNotNull("ProtectedBind was not created.", protectedBind);
        assertTrue(areTheSame(protectedBind.getBind(), bind));
        assertTrue("Bind was left unprotected.", protectedBind.getBindCheck());
    }
}
