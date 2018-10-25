package student.manchester.configuration;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import student.manchester.annotation.Auth;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.service.auth.exception.LogicException;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
@RestControllerAdvice
class GlobalDefaultExceptionHandler {
    public static final String DEFAULT_ERROR_VIEW = "error";

    @ExceptionHandler(value = Exception.class)
    public AuthenticatedResponse defaultErrorHandler(final @Auth JWTUserDetails user, Exception e) {

        if(e instanceof LogicException) {
            final LogicException logicEx = (LogicException) e;

        }
        return mav;
    }
}
