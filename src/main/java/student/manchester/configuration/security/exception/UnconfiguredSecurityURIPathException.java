package student.manchester.configuration.security.exception;

import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ResponseStatus;

import student.manchester.configuration.JWTSecurityConfiguration;

/**
 * Thrown when a request is made to an unprotected URI,
 * that was not present in {@link JWTSecurityConfiguration#PUBLIC_ENDPOINTS}
 *
 * @author Anastas Anastasov
 * on 2/15/2019.
 */
@ResponseStatus(value= HttpStatus.INTERNAL_SERVER_ERROR)
public class UnconfiguredSecurityURIPathException extends AuthenticationException {

    public UnconfiguredSecurityURIPathException(final String message, Throwable cause) {
        super(message, cause);
    }

    public UnconfiguredSecurityURIPathException(final String message) {
        super(message);
    }
}
