package student.manchester.service.auth;

import student.manchester.api.auth.bean.UpdateUserInput;
import student.manchester.model.auth.bean.UserDTO;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
public interface UserService {

    UserDTO createUser(String email, String password);

    UserDTO findById(Long userId);

    UserDTO getUserByCredentials(String username, String password);

    String generateUsernameFromEmail(String email);

    UserDTO updateUser(Long id, UpdateUserInput input);
}
