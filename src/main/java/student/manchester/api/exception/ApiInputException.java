package student.manchester.api.exception;

import javafx.util.Builder;
import student.manchester.service.auth.exception.LogicException;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
public class ApiInputException extends LogicException {

    private final Map<String, String> errors;

    public ApiInputException(final String message, final Map<String, String> errors) {
        super(message);
        this.errors = errors;
    }

    public ApiInputException(final String message, final Map<String, String> errors, final Throwable cause) {
        super(message, cause);
        this.errors = errors;
    }

    public ApiInputException(final Map<String, String> errors, final Throwable cause) {
        super(null, cause);
        this.errors = errors;
    }

    public ApiInputException(final Map<String, String> errors) {
        super("");
        this.errors = errors;
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public static class Builder {
        private Map<String, String> errors;
        private String message;
        private Throwable cause;

        public Builder() {}

        public Builder(ApiInputException copy) {
            errors = copy.getErrors();
            message = copy.getMessage();
            cause = copy.getCause();
        }

        public Builder addError(final String inputField, final String message) {
            if (errors == null) errors = new LinkedHashMap<>();
            errors.put(inputField, message);
            return this;
        }

        public Builder setMessage(final String message) {
            this.message = message;
            return this;
        }

        public Builder setCause(final Throwable cause) {
            this.cause = cause;
            return this;
        }

        public ApiInputException build() {
            return new ApiInputException(this.errors);
        }
    }
}
