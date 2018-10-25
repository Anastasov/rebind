package student.manchester.configuration;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import student.manchester.api.bean.RebindResponse;
import student.manchester.api.exception.ApiInputException;
import student.manchester.service.auth.exception.LogicException;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
@RestControllerAdvice
class GlobalRestControllerExceptionHandler {
    public static final String UNSPECIFIED_EXCEPTION_MESSAGE =
            "Something is wrong.";

    /*
     * Configure exception handling
     * NOTE: only status 200 - ok -
     * is returning with body, that contains message
     */
    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public ResponseEntity<RebindResponse> defaultErrorHandler(final Exception e) {
        final RebindResponse response = new RebindResponse();
        response.setOk(false);
        final HttpStatus status = setMessage(e, response);
        return new ResponseEntity<>(response, status);
    }

    private HttpStatus setMessage(final Exception e, final RebindResponse response) {
        final HttpStatus status;
        if(e instanceof ApiInputException) {
            response.setMessage(e.getMessage());
            response.getErrors().putAll(((ApiInputException) e).getErrors());
            status = HttpStatus.OK;
        } else if(e instanceof LogicException) {
            response.setMessage(e.getMessage());
            status = HttpStatus.OK;
        } else if (e instanceof AuthenticationException) {
            response.setMessage(AUTHENTICATION_EXCEPTION_MESSAGE());
            response.addError("email", "");
            response.addError("password", "");
            status = HttpStatus.UNAUTHORIZED;
        } else {
            response.setMessage(UNSPECIFIED_EXCEPTION_MESSAGE);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return status;
    }

    private String AUTHENTICATION_EXCEPTION_MESSAGE() {
        return "Incorrect credentials.";
    }

    //    /* Configure auto generating token on each successful response */
    //    @Pointcut("* student.manchester.api.*(..)")
    //    public void invoke() {
    //    }
    //
    //    @Before("invoke()")
    //    public void beforeInvokingMethod(JoinPoint joinPoint) {
    //        // do stuff here
    //    }
}
