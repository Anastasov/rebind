package student.manchester.service.user.impl;

import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.annotation.TransactionalService;
import student.manchester.api.user.bean.BindUpdateRequest;
import student.manchester.api.user.bean.UserUpdateRequest;
import student.manchester.api.common.exception.ApiInputException;
import student.manchester.dao.auth.RoleDao;
import student.manchester.dao.user.BindDao;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.dao.user.ProtectedUserDao;
import student.manchester.dao.user.UserDao;
import student.manchester.model.bind.Bind;
import student.manchester.model.auth.Roles;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.bind.BindValidator;
import student.manchester.service.user.UserService;
import student.manchester.service.exception.LogicException;
import student.manchester.service.user.UserValidator;

import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;

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

    @Autowired
    private UserValidator validator;

    @Autowired
    private BindValidator bindValidator;

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
        userUpdateRequestToEntity(input, entity);
        return new UserDTO(entity);
    }

    @Override
    public BindDTO createBind(final Long userId, final BindUpdateRequest input) {
        final User user = getRequiredUser(userId);
        final Bind bind = new Bind();
        bindUpdateRequestToEntity(input, bind);
        bind.setUser(user);
        bindDao.save(bind);
        return new BindDTO(bind);
    }

    @Override
    public BindDTO updateBind(final Long userId, final Long bindId, final BindUpdateRequest input) {
        final Bind bind = getRequiredBind(bindId);
        bindUpdateRequestToEntity(input, bind);
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
            final Bind bind = deletedBind
                    .orElseThrow(() -> new LogicException("Bind doesn't exist"));
            user.getBinds().remove(bind);
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
        validateBind(bind);
        final ProtectedBind protectedBind = new ProtectedBind();
        protectedBind.setBind(bind);
        protectedBind.setBindCheck(Boolean.TRUE);
        protectedBindDao.save(protectedBind);
        return protectedBind;
    }

    @Override
    public boolean existsUserWithEmail(final String email) {
        return userDao.existsUserWithEmail(email);
    }

    @Override
    public boolean existsUserWithUsername(final String username) {
        return userDao.existsUserWithUsername(username);
    }

    private void userUpdateRequestToEntity(final UserUpdateRequest input, final User entity) {
        Optional.ofNullable(input.getUsername()).ifPresent(validateAndSetUsername(entity));
        Optional.ofNullable(input.getFirstName()).ifPresent(validateAndSetFirstName(entity));
        Optional.ofNullable(input.getLastName()).ifPresent(validateAndSetLastName(entity));
        Optional.ofNullable(input.getEmail()).ifPresent(validateAndSetEmail(entity));
        Optional.ofNullable(input.getPhone()).ifPresent(validateAndSetPhone(entity));
        Optional.ofNullable(input.getPostcode()).ifPresent(validateAndSetPostcode(entity));
    }

    private void bindUpdateRequestToEntity(final BindUpdateRequest input, final Bind bind) {
        Optional.ofNullable(input.getIcon()).ifPresent(validateAndSetBindIcon(bind));
        Optional.ofNullable(input.getName()).ifPresent(validateAndSetBindName(bind));
        Optional.ofNullable(input.getUrl()).ifPresent(validateAndSetBindUrl(bind));
    }

    private void validateBind(final Bind bind) {
        if(bind == null) {
            throw new LogicException(
                    "A ProtectedBind is created to match a pair in Bind.Bind cannot be null.");
        }
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
            validator.validateNewUser(user);
        } catch (ApiInputException ex) {
            throw new ApiInputException.Builder(ex)
                    .setMessage("Sign Up was unsuccessful.")
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

    private Consumer<String> validateAndSetUsername(final User user) {
        return username -> {
            validator.validateUsername(username);
            user.setUsername(username);
        };
    }

    private Consumer<String> validateAndSetEmail(final User user) {
        return email -> {
            validator.validateEmail(email);
            user.setEmail(email);
        };
    }

    private Consumer<String> validateAndSetFirstName(final User user) {
        return firstName -> {
            validator.validateFirstName(firstName);
            user.setFirstName(firstName);
        };
    }

    private Consumer<String> validateAndSetLastName(final User user) {
        return lastName -> {
            validator.validateLastName(lastName);
            user.setLastName(lastName);
        };
    }

    private Consumer<String> validateAndSetPhone(final User user) {
        return phone -> {
            validator.validatePhone(phone);
            user.setPhone(phone);
        };
    }

    private Consumer<String> validateAndSetPostcode(final User user) {
        return postcode -> {
            validator.validatePostcode(postcode);
            user.setPostcode(postcode);
        };
    }

    private Consumer<String> validateAndSetBindName(final Bind bind) {
        return name -> {
            bindValidator.validateName(name);
            bind.setName(name);
        };
    }

    private Consumer<String> validateAndSetBindUrl(final Bind bind) {
        return url -> {
            bindValidator.validateUrl(url);
            bind.setUrl(url);
        };
    }

    private Consumer<String> validateAndSetBindIcon(final Bind bind) {
        return icon -> {
            bindValidator.validateIcon(icon);
            bind.setIcon(icon);
        };
    }
}
