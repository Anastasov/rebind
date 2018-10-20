package student.manchester.configuration.security.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class InvalidTokenException extends AuthenticationException {

    public InvalidTokenException(final String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidTokenException(final String message) {
        super(message);
    }

}
