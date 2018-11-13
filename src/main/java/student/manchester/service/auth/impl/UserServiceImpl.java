package student.manchester.service.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.annotation.TransactionalService;
import student.manchester.api.auth.bean.UpdateUserInput;
import student.manchester.api.exception.ApiInputException;
import student.manchester.dao.auth.RoleDao;
import student.manchester.dao.auth.UserDao;
import student.manchester.model.auth.Roles;
import student.manchester.model.auth.User;
import student.manchester.model.auth.bean.RoleDTO;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.UserService;
import student.manchester.service.auth.exception.LogicException;

import javax.mail.internet.InternetAddress;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@TransactionalService
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Override
    public UserDTO findById(final Long userId) {
        final User entity = userDao.load(userId);
        return  entity == null ? new UserDTO() : new UserDTO(entity);
    }

    @Override
    public UserDTO getUserByCredentials(final String email, final String password) {
        final UserDTO user = checkCredentialsMatch(email, password);
        return user;
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

    @Override
    public UserDTO createUser(final String email, final String password) {
        final UserDTO user = createDTO(email, password);
        validateNewUser(user);
        saveUser(user);
        return user;
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
    public UserDTO updateUser(final Long id, final UpdateUserInput input) {
        final User entity = userDao.load(id);
        Optional.ofNullable(input.getUsername()).ifPresent(entity::setUsername);
        Optional.ofNullable(input.getFirstName()).ifPresent(entity::setFirstName);
        Optional.ofNullable(input.getLastName()).ifPresent(entity::setLastName);
        Optional.ofNullable(input.getEmail()).ifPresent(entity::setEmail);
        Optional.ofNullable(input.getPhone()).ifPresent(entity::setPhone);
        Optional.ofNullable(input.getPostcode()).ifPresent(entity::setPostcode);
        return new UserDTO(entity);
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
