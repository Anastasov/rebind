package student.manchester.controller.bean;

/**
 * @author Anastas Anastasov
 * on 10/18/2018.
 */
public class AuthenticatedResponse {

    private boolean isOk;
    private String errorMessage;
    private String token;

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(final String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getToken() {
        return token;
    }

    public void setToken(final String token) {
        this.token = token;
    }

    public boolean isOk() {
        return isOk;
    }

    public void setOk(final boolean ok) {
        this.isOk = ok;
    }
}
