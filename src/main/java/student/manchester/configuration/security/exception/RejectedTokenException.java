package student.manchester.configuration.security.exception;

import org.springframework.security.core.AuthenticationException;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class RejectedTokenException extends AuthenticationException {

    public RejectedTokenException(final String message, Throwable cause) {
        super(message, cause);
    }

    public RejectedTokenException(final String message) {
        super(message);
    }
}
