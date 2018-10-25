package student.manchester.configuration.security.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Anastas Anastasov
 * on 10/21/2018.
 */
@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
public class TokenSecretNotConfiguredException extends AuthenticationException {

    public TokenSecretNotConfiguredException(final String message, Throwable cause) {
        super(message, cause);
    }

    public TokenSecretNotConfiguredException(final String message) {
        super(message);
    }
}
