package student.manchester.configuration.security.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@ResponseStatus(value= HttpStatus.UNAUTHORIZED)
public class RejectedTokenException extends AuthenticationException {

    public RejectedTokenException(final String message, Throwable cause) {
        super(message, cause);
    }

    public RejectedTokenException(final String message) {
        super(message);
    }
}
