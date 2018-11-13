package student.manchester.api.auth.bean;

import student.manchester.model.auth.bean.UserDTO;

/**
 * @author Anastas Anastasov
 * on 10/25/2018.
 */
public class ProfileResponse extends AuthenticatedResponse {

    private UserDTO user;

    public UserDTO getUser() {
        return user;
    }

    public void setUser(final UserDTO user) {
        this.user = user;
    }
}
