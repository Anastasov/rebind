package student.manchester.api.auth.bean;

/**
 * @author Anastas Anastasov
 * on 10/25/2018.
 */
public class ProfileResponse extends AuthenticatedResponse {

    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }
}
