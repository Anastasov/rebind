package student.manchester.controller.bean;

import student.manchester.api.auth.bean.AuthenticatedResponse;

/**
 * @author Anastas Anastasov
 * on 10/24/2018.
 */
public class LoginResponse extends AuthenticatedResponse {

    private String email;
    private Long id;

    public LoginResponse() {

    }

    public LoginResponse(final AuthenticatedResponse authenticatedResponse) {
        super(authenticatedResponse);
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }
}
