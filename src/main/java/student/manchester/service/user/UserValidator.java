package student.manchester.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import student.manchester.api.common.exception.ApiInputException;
import student.manchester.model.user.dto.UserDTO;

import javax.mail.internet.InternetAddress;
import java.util.Optional;
import java.util.regex.Pattern;

/**
 * @author Anastas Anastasov
 * on 2/18/2019.
 */
@Component
public class UserValidator {

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

    private static final Pattern PASSWORD_PATTERN =
            Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$");

    private static final Pattern PHONE_PATTERN =
            Pattern.compile("^[0\\+][0-9]{9,13}$");
    private static final Pattern UK_GOV_POSTCODE_PATTERN = Pattern.compile(
    "([Gg][Ii][Rr] 0[Aa]{2})"
            + "|((([A-Za-z][0-9]{1,2})"
            + "|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})"
            + "|(([A-Za-z][0-9][A-Za-z])"
            + "|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))"
            + "\\s?[0-9][A-Za-z]{2})");

    @Autowired
    private UserService userService;

    public void validateNewUser(final UserDTO user) {
        validateEmail(user.getEmail());
        validatePassword(user.getPassword());
    }

    public void validate(final UserDTO user) {
        validateNewUser(user);
        validateUsername(user.getUsername());
        validateName(user.getFirstName(), "firstName");
        validateName(user.getLastName(), "lastName");
        validatePhone(user.getPhone());
        validatePostcode(user.getPostcode());
    }

    public void validatePostcode(final String postcode) {
        final String value = Optional.ofNullable(postcode).orElse("");
        if(StringUtils.isEmpty(value)
                || value.length() > 10
                || !UK_GOV_POSTCODE_PATTERN.matcher(value).matches()) {
            throw new ApiInputException.Builder()
                    .addError("postcode", "Invalid Postcode. Should be less than 10 symbols.")
                    .build();
        }
    }

    public void validatePhone(final String phone) {
        final String value = Optional.ofNullable(phone).orElse("");
        if(StringUtils.isEmpty(value)
                || value.length() > 14
                || !PHONE_PATTERN.matcher(value).matches()) {
            throw new ApiInputException.Builder()
                    .addError("phone", "Invalid Phone. Should be less than 14 symbols.")
                    .build();
        }
    }

    public void validateFirstName(final String name) {
        validateName(name, "firstName");
    }

    public void validateLastName(final String name) {
        validateName(name, "lastName");
    }

    public void validateName(final String name, final String field) {
        final String value = Optional.ofNullable(name).orElse("");
        if(StringUtils.isEmpty(value) || value.length() > 60) {
            throw new ApiInputException.Builder()
                    .addError(field, "Invalid First name. Should be less than 60 symbols.")
                    .build();
        }
    }

    public void validateUsername(final String username) {
        final String value = Optional.ofNullable(username).orElse("");
        if(StringUtils.isEmpty(value)) {
            throw new ApiInputException.Builder()
                    .addError("username", "Invalid username.")
                    .build();
        }
        validateUsernameUnique(value);
    }

    public void validatePassword(final String password) {
        final String value = Optional.ofNullable(password).orElse("");
        if(!PASSWORD_PATTERN.matcher(value).matches()) {
            throw new ApiInputException.Builder()
                    .addError("password", PASSWORD_HINT)
                    .build();
        }
    }

    public void validateEmail(final String email) {
        final String value = Optional.ofNullable(email).orElse("");
        try {
            new InternetAddress(value).validate();
        } catch (final Exception ex) {
            throw new ApiInputException.Builder()
                    .addError("email", "Invalid email.")
                    .build();
        }
        validateEmailUnique(value);
    }

    private void validateEmailUnique(final String email) {
        if(userService.existsUserWithEmail(email)) {
            final String message = "User with e-mail '" + email + "' already exists.";
            throw new ApiInputException.Builder()
                    .setMessage("Register failed.")
                    .addError("email", message)
                    .build();
        }
    }

    private void validateUsernameUnique(final String username) {
        if(userService.existsUserWithUsername(username)) {
            final String message = "User with username '" + username + "' already exists.";
            throw new ApiInputException.Builder()
                    .setMessage("Register failed.")
                    .addError("username", message)
                    .build();
        }
    }
}
