package student.manchester.api.auth.bean;

import student.manchester.api.bean.RebindResponse;

/**
 * @author Anastas Anastasov
 * on 10/18/2018.
 */
public class AuthenticatedResponse extends RebindResponse {

    private String token;

    public AuthenticatedResponse(){

    }

    public AuthenticatedResponse(final AuthenticatedResponse authenticatedResponse) {
        super(authenticatedResponse);
        this.token = authenticatedResponse.getToken();
    }

    public String getToken() {
        return token;
    }

    public void setToken(final String token) {
        this.token = token;
    }
}
