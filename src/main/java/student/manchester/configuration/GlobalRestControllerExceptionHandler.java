package student.manchester.configuration;

import org.hibernate.exception.ConstraintViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import student.manchester.api.common.bean.RebindResponse;
import student.manchester.api.common.exception.ApiInputException;
import student.manchester.service.exception.LogicException;

import java.util.function.Consumer;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
@RestControllerAdvice
class GlobalRestControllerExceptionHandler {
    public static final String UNSPECIFIED_EXCEPTION_MESSAGE =
            "Something is wrong.";
    public static final String AUTHENTICATION_EXCEPTION_MESSAGE = "Incorrect credentials.";
    public static final String AUTHORIZATION_EXCEPTION_MESSAGE = "You do not have access to this resource.";
    public static final String INVALID_INPUT_EXCEPTION_MESSAGE = "Invalid input provided.";

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

    private HttpStatus setMessage(final Exception ex, final RebindResponse response) {
        final HttpStatus status;
        if(ex instanceof ApiInputException) {
            response.setMessage(ex.getMessage());
            response.getErrors().putAll(((ApiInputException) ex).getErrors());
            status = HttpStatus.OK;
        } else if(ex instanceof LogicException) {
            response.setMessage(ex.getMessage());
            status = HttpStatus.OK;
        } else if (ex instanceof MethodArgumentNotValidException) {
            ((MethodArgumentNotValidException) ex)
                    .getBindingResult().getAllErrors()
                    .forEach(addErrorToResponse(response));
            response.setMessage(INVALID_INPUT_EXCEPTION_MESSAGE);
            status = HttpStatus.OK;
        } else if(ex instanceof ConstraintViolationException) {
            response.setMessage(((ConstraintViolationException) ex).getConstraintName());
            status = HttpStatus.OK;
        } else if (ex instanceof AuthenticationException) {
            response.setMessage(AUTHENTICATION_EXCEPTION_MESSAGE);
            response.addError("email", "");
            response.addError("password", "");
            status = HttpStatus.UNAUTHORIZED;
        } else if (ex instanceof AccessDeniedException) {
            response.setMessage(AUTHORIZATION_EXCEPTION_MESSAGE);
            response.addError("email", "");
            response.addError("password", "");
            status = HttpStatus.FORBIDDEN;
        } else {
            ex.printStackTrace();
            response.setMessage(UNSPECIFIED_EXCEPTION_MESSAGE + ":" + ex.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return status;
    }

    private Consumer<ObjectError> addErrorToResponse(final RebindResponse response) {
        return error -> {
            final String errorField = isFieldError(error) ?
                    ((FieldError) error).getField() :
                    error.getObjectName();
            response.addError(errorField, error.getDefaultMessage());
        };
    }

    private boolean isFieldError(final ObjectError error) {
        return FieldError.class.isAssignableFrom(error.getClass());
    }

    //    /* Configure auto generating token on each successful student.manchester.common */
    //    @Pointcut("* student.manchester.api.*(..)")
    //    public void invoke() {
    //    }
    //
    //    @Before("invoke()")
    //    public void beforeInvokingMethod(JoinPoint joinPoint) {
    //        // do stuff here
    //    }
}
