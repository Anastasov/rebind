package student.manchester.api.user.bean;

import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.model.user.dto.UserDTO;

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
