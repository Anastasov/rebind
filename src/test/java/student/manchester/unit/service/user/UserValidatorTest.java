package student.manchester.unit.service.user;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import student.manchester.service.user.UserService;
import student.manchester.service.user.UserValidator;

import static org.junit.Assert.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static student.manchester.util.AssertUtil.assertExceptionIsNotThrown;
import static student.manchester.util.AssertUtil.assertExceptionIsThrown;

/**
 * @author Anastas Anastasov
 * on 2/18/2019.
 */
@RunWith(MockitoJUnitRunner.class)
public class UserValidatorTest {

    private static final String VALID_EMAIL = "test@abv.bg";
    public static final String VALID_PASSWORD = "bazinga_bZ_96";
    public static final String VALID_UERSNAME = "myUserName";

    @Mock
    private UserService userService;

    @InjectMocks
    private final UserValidator validator = new UserValidator();

    @Test
    public void validateEmailTest() {
        when(userService.existsUserWithEmail(anyString())).thenReturn(false);
        assertExceptionIsThrown(() -> validator.validateEmail(null));
        assertExceptionIsThrown(() -> validator.validateEmail(""));
        assertExceptionIsThrown(() -> validator.validateEmail("not-valid-mail"));
        assertExceptionIsThrown(() -> validator.validateEmail("notValid.com"));

        // valid e-mail
        assertExceptionIsNotThrown(() -> validator.validateEmail(VALID_EMAIL));

        // cannot have users with duplicate e-mails
        when(userService.existsUserWithEmail(anyString())).thenReturn(true);
        assertExceptionIsThrown(() -> validator.validateEmail(VALID_EMAIL));
    }

    @Test
    public void validatePasswordTest() {
        // empty
        assertExceptionIsThrown(() -> validator.validatePassword(null));
        assertExceptionIsThrown(() -> validator.validatePassword(""));
        // not containing lower case letter
        assertExceptionIsThrown(() -> validator.validatePassword("BAZINGA_96"));
        // not containing upper case letter
        assertExceptionIsThrown(() -> validator.validatePassword("bazinga_96"));
        // not containing number
        assertExceptionIsThrown(() -> validator.validatePassword("bazinga_bZ"));
        // containing white space
        assertExceptionIsThrown(() -> validator.validatePassword("bazinga bZ 96"));
        // less than 8 symbols
        assertExceptionIsThrown(() -> validator.validatePassword("bAZ_96"));

        // perfection
        assertExceptionIsNotThrown(() -> validator.validatePassword(VALID_PASSWORD));
    }

    @Test
    public void validateUsernameTest() {
        when(userService.existsUserWithUsername(anyString())).thenReturn(false);
        // empty
        assertExceptionIsThrown(() -> validator.validateUsername(null));
        assertExceptionIsThrown(() -> validator.validateUsername(""));
        // everything else is fine
        assertExceptionIsNotThrown(() -> validator.validateUsername("a"));
        assertExceptionIsNotThrown(() -> validator.validateUsername(VALID_UERSNAME));

        // unless it duplicates
        when(userService.existsUserWithUsername(anyString())).thenReturn(true);
        assertExceptionIsThrown(() -> validator.validateUsername(VALID_UERSNAME));
    }

    @Test
    public void validateNameTest() {
        // empty
        assertExceptionIsThrown(() -> validator.validateName(null, ""));
        assertExceptionIsThrown(() -> validator.validateName("", ""));

        // this is OK
        final StringBuilder longName = new StringBuilder();
        final int maxNumberOfSymbols = 60;
        for(int i = 0; i < maxNumberOfSymbols; i++) {
            longName.append("a");
        }
        assertExceptionIsNotThrown(() -> validator.validateName(longName.toString(), ""));

        // over the max name size
        longName.append("a");
        assertExceptionIsThrown(() -> validator.validateName(longName.toString(), ""));
    }

    @Test
    public void validatePhoneTest() {
        // empty
        assertExceptionIsThrown(() -> validator.validatePhone(null));
        assertExceptionIsThrown(() -> validator.validatePhone(""));

        // contains letters
        assertExceptionIsThrown(() -> validator.validatePhone("+44074187352a"));
        // contains other symbols
        assertExceptionIsThrown(() -> validator.validatePhone("+44074187352$"));

        // more than 14 symbols
        assertExceptionIsThrown(() -> validator.validatePhone("+440741873522342323"));

        // ok
        assertExceptionIsNotThrown(() -> validator.validatePhone("+4407418735223"));
    }

    @Test
    public void validatePostcodeTest() {
        // empty
        assertExceptionIsThrown(() -> validator.validatePostcode(null));
        assertExceptionIsThrown(() -> validator.validatePostcode(""));

        // invalid postcodes
        assertExceptionIsThrown(() -> validator.validatePostcode("923"));
        assertExceptionIsThrown(() -> validator.validatePostcode("KKK"));
        assertExceptionIsThrown(() -> validator.validatePostcode("deividduhovni"));

        // valid postcodes
        assertExceptionIsNotThrown(() -> validator.validatePostcode("M14 7LH"));
        assertExceptionIsNotThrown(() -> validator.validatePostcode("M12 4GP"));
        assertExceptionIsNotThrown(() -> validator.validatePostcode("WC2H 7LT"));
    }
}
