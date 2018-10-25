package student.manchester.service.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@ResponseStatus(value=HttpStatus.INTERNAL_SERVER_ERROR)
public class LogicException extends RuntimeException {

    public LogicException(final String message) {
        super(message);
    }

    public LogicException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public LogicException(final Throwable cause) {
        super(cause.getMessage(), cause);
    }

    public LogicException(final String message, final Throwable cause, final boolean enableSuppression,
                          final boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
