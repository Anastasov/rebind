package student.manchester.api.bean;

import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
public class RebindResponse implements Serializable {

    private boolean ok;
    private String message;
    private Map<String, String> errors = new LinkedHashMap<>();

    public RebindResponse() {
    }

    public RebindResponse(final RebindResponse rebindResponse) {
        this.ok = rebindResponse.ok;
        this.message = rebindResponse.message;
        this.errors = rebindResponse.errors;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    public boolean isOk() {
        return ok;
    }

    public void setOk(final boolean ok) {
        this.ok = ok;
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(final Map<String, String> errors) {
        this.errors = errors;
    }

    public void addError(final String key, final String value) {
        this.errors.put(key, value);
    }
}
