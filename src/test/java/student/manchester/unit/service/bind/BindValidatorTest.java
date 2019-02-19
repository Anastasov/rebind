package student.manchester.unit.service.bind;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.service.bind.BindValidator;

import static student.manchester.util.AssertUtil.assertExceptionIsNotThrown;
import static student.manchester.util.AssertUtil.assertExceptionIsThrown;

/**
 * @author Anastas Anastasov
 * on 2/18/2019.
 */
@RunWith(MockitoJUnitRunner.class)
public class BindValidatorTest {

    private static final String VALID_NAME = "Facebook";
    private static final String VALID_URL = "https://";
    private static final String VALID_ICON = "FACEBOOK_ICON";

    private final BindValidator validator = new BindValidator();

    @Test
    public void validateBindTest() {
        final BindDTO bind = new BindDTO();
        // cannot be empty
        assertExceptionIsThrown(() -> validator.validate(null));
        assertExceptionIsThrown(() -> validator.validate(bind));

        // Needs Name
        bind.setName(VALID_NAME);
        assertExceptionIsThrown(() -> validator.validate(bind));

        // Needs url
        bind.setUrl(VALID_URL);
        assertExceptionIsThrown(() -> validator.validate(bind));

        bind.setIcon(VALID_ICON);
        // but can be everything else
        assertExceptionIsNotThrown(() -> validator.validate(bind));
    }

    @Test
    public void validateBindNameTest() {
        // cannot be empty
        assertExceptionIsThrown(() -> validator.validateName(null));
        assertExceptionIsThrown(() -> validator.validateName(""));
        // but can be everything else
        assertExceptionIsNotThrown(() -> validator.validateName("a"));
        assertExceptionIsNotThrown(() -> validator.validateName(VALID_NAME));
    }

    @Test
    public void validateBindUrlTest() {
        // cannot be empty
        assertExceptionIsThrown(() -> validator.validateUrl(null));
        assertExceptionIsThrown(() -> validator.validateUrl(""));
        // but can be everything else
        assertExceptionIsNotThrown(() -> validator.validateUrl("a"));
        assertExceptionIsNotThrown(() -> validator.validateUrl(VALID_URL));
    }

    @Test
    public void validateBindIconTest() {
        // cannot be empty
        assertExceptionIsThrown(() -> validator.validateIcon(null));
        assertExceptionIsThrown(() -> validator.validateIcon(""));
        // but can be everything else
        assertExceptionIsNotThrown(() -> validator.validateIcon("a"));
        assertExceptionIsNotThrown(() -> validator.validateIcon(VALID_ICON));
    }

}
