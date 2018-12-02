package student.manchester.service.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.annotation.TransactionalService;
import student.manchester.api.auth.bean.BindUpdateRequest;
import student.manchester.api.auth.bean.UserUpdateRequest;
import student.manchester.api.exception.ApiInputException;
import student.manchester.dao.auth.RoleDao;
import student.manchester.dao.user.BindDao;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.dao.user.ProtectedUserDao;
import student.manchester.dao.user.UserDao;
import student.manchester.model.bind.Bind;
import student.manchester.model.auth.Roles;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.user.UserService;
import student.manchester.service.exception.LogicException;

import javax.mail.internet.InternetAddress;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@TransactionalService
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private BindDao bindDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private ProtectedUserDao protectedUserDao;

    @Autowired
    private ProtectedBindDao protectedBindDao;

    @Override
    public UserDTO findById(final Long userId) {
        final User entity = getRequiredUser(userId);
        return new UserDTO(entity);
    }



    @Override
    public UserDTO getUserByCredentials(final String email, final String password) {
        final UserDTO user = checkCredentialsMatch(email, password);
        return user;
    }

    @Override
    public UserDTO createUser(final String email, final String password) {
        final UserDTO user = createDTO(email, password);
        validateNewUser(user);
        saveUser(user);
        return user;
    }

    @Override
    public String generateUsernameFromEmail(final String email) {
        String username = email.split("@")[0].toLowerCase();
        final List<User> existingUsernames = userDao.findByUsernameStarting(username);
        if(existingUsernames != null && !existingUsernames.isEmpty()) {
            final User lastUser = existingUsernames.get(0);
            final String[] usernames = lastUser.getUsername().split(username);
            if(usernames.length == 2) {
                username += Integer.valueOf(usernames[1]) + 1;
            } else{
                username += "1";
            }
        }
        return username;
    }

    @Override
    public UserDTO updateUser(final Long id, final UserUpdateRequest input) {
        final User entity = getRequiredUser(id);
        Optional.ofNullable(input.getUsername()).ifPresent(entity::setUsername);
        Optional.ofNullable(input.getFirstName()).ifPresent(entity::setFirstName);
        Optional.ofNullable(input.getLastName()).ifPresent(entity::setLastName);
        Optional.ofNullable(input.getEmail()).ifPresent(entity::setEmail);
        Optional.ofNullable(input.getPhone()).ifPresent(entity::setPhone);
        Optional.ofNullable(input.getPostcode()).ifPresent(entity::setPostcode);
        return new UserDTO(entity);
    }

    @Override
    public BindDTO createBind(final Long userId, final BindUpdateRequest input) {
        final User user = getRequiredUser(userId);
        final Bind bind = new Bind();
        Optional.ofNullable(input.getIcon()).ifPresent(bind::setIcon);
        Optional.ofNullable(input.getName()).ifPresent(bind::setName);
        Optional.ofNullable(input.getUrl()).ifPresent(bind::setUrl);
        bind.setUser(user);
        bindDao.save(bind);
        return new BindDTO(bind);
    }

    @Override
    public BindDTO updateBind(final Long userId, final Long bindId, final BindUpdateRequest input) {
        final Bind bind = getRequiredBind(bindId);
        Optional.ofNullable(input.getIcon()).ifPresent(bind::setIcon);
        Optional.ofNullable(input.getName()).ifPresent(bind::setName);
        Optional.ofNullable(input.getUrl()).ifPresent(bind::setUrl);
        return new BindDTO(bind);
    }

    @Override
    public boolean deleteBind(final Long id, final Long bindId) {
        boolean deletedSuccessfully = true;
        try {
            final User user = getRequiredUser(id);
            final Optional<Bind> deletedBind =
                    user.getBinds().stream()
                        .filter(bind -> bind.getId().equals(bindId))
                        .findFirst();
            user.getBinds().remove(deletedBind
                    .orElseThrow(() -> new RuntimeException("Bind doesn't exist")));
        } catch(final Exception ex) {
            deletedSuccessfully = false;
        }
        return deletedSuccessfully;
    }

    @Override
    public ProtectedUser createProtectedUser(final Long userId) {
        final User user = getRequiredUser(userId);
        final ProtectedUser protectedUser = new ProtectedUser();
        protectedUser.setUser(user);
        protectedUser.setUsernameCheck(Boolean.TRUE);
        protectedUser.setEmailCheck(Boolean.TRUE);
        protectedUser.setFirstNameCheck(Boolean.TRUE);
        protectedUser.setLastNameCheck(Boolean.TRUE);
        protectedUser.setPhoneCheck(Boolean.TRUE);
        protectedUser.setPostcodeCheck(Boolean.TRUE);
        protectedUserDao.save(protectedUser);
        return protectedUser;
    }

    @Override
    public ProtectedBind createProtectedBind(final Bind bind) {
        final ProtectedBind protectedBind = new ProtectedBind();
        protectedBind.setBind(bind);
        protectedBind.setBindCheck(Boolean.TRUE);
        protectedBindDao.save(protectedBind);
        return protectedBind;
    }

    private UserDTO checkCredentialsMatch(final String email, final String password) {
        final User user = userDao.findBy(email, password);
        validateDatabaseMatch(user);
        return new UserDTO(user);
    }

    private void validateDatabaseMatch(final User user) {
        if (user == null) {
            throw new LogicException("Email credentials did not match.");
        }
    }

    private Bind getRequiredBind(final Long id) {
        final Bind entity = bindDao.get(id);
        if(entity == null) {
            throw new LogicException("Couldn't find user with id[" + id + "]");
        }
        return entity;
    }

    @SuppressWarnings("unchecked")
    private User getRequiredUser(final Long userId) {
        final User entity = userDao.get(userId);
        if(entity == null) {
            throw new LogicException("Couldn't find user with id[" + userId + "]");
        }
        return entity;
    }

    private void saveUser(final UserDTO userData) {
        final User user = new User();
        user.setEmail(userData.getEmail());
        user.setUsername(userData.getUsername());
        user.setPassword(userData.getPassword());
        assignRole(user, Roles.UNCONFIRMED_USER);
        userDao.save(user);
        userData.setId(user.getId());
        userData.setRole(new RoleDTO(user.getRole()));
    }

    private void assignRole(final User user, final Roles role) {
        user.setRole(roleDao.getRoleByName(role.name()));
    }

    private void validateNewUser(final UserDTO user) {
        try {
            Validator.isValid(user);
            isEmailUnique(user.getEmail());
        } catch (ApiInputException ex) {
            throw new ApiInputException.Builder(ex)
                    .setMessage("Sign Up was unsuccessful.")
                    .build();
        }
    }

    private void isEmailUnique(final String email) {
        if(userDao.existsUserWithEmail(email)) {
            final String message = "User with e-mail '" + email + "' already exists.";
            throw new ApiInputException.Builder()
                    .setMessage("Register failed.")
                    .addError("email", message)
                    .build();
        }
    }

    private UserDTO createDTO(final String email, final String password) {
        final UserDTO user = new UserDTO();
        user.setEmail(email);
        user.setUsername(generateUsernameFromEmail(email));
        user.setPassword(password);
        return user;
    }

    private static class Validator {
        /**
         *  ^                 # start-of-string
         *  (?=.*[0-9])       # a digit must occur at least once
         *  (?=.*[a-z])       # a lower case letter must occur at least once
         *  (?=.*[A-Z])       # an upper case letter must occur at least once
         *  (?=\S+$)          # no whitespace allowed in the entire string
         *  .{8,}             # anything, at least eight places though
         *  $                 # end-of-string
         */
        private static final String PASSWORD_HINT =
                new StringBuilder("At least 8 symbols.")
                    .append("Has to include a ")
                    .append("digit, ")
                    .append("lower case letter, ")
                    .append("upper case letter, and a ")
                    .append("White-space not allowed.")
                    .toString();

        private static final Pattern pattern =
                Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$");

        private static void isValid(final UserDTO user) {
            final String email = user.getEmail() == null ? "" : user.getEmail();
            isValidEmail(email);
            isValidPassword(user.getPassword() == null ? "" : user.getPassword());
        }



        private static void isValidPassword(final String password) {
            if(!pattern.matcher(password).find()) {
                throw new ApiInputException.Builder()
                        .addError("password", PASSWORD_HINT)
                        .build();
            }
        }

        private static void isValidEmail(final String email) {
            try {
                new InternetAddress(email).validate();
            } catch (final Exception ex) {
                throw new ApiInputException.Builder()
                        .addError("email", "Invalid email")
                        .build();
            }

        }
    }
}
