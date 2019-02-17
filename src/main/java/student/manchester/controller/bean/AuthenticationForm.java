package student.manchester.controller.bean;

import javax.validation.constraints.NotBlank;
/**
 * @author Anastas Anastasov
 * on 10/18/2018.
 */
public class AuthenticationForm {

    @NotBlank
    private String username;

    @NotBlank
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }
}
