package student.manchester.service.user;

import student.manchester.api.user.bean.BindUpdateRequest;
import student.manchester.api.user.bean.UserUpdateRequest;
import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.dto.UserDTO;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
public interface UserService {

    UserDTO createUser(String email, String password);

    UserDTO findById(Long userId);

    UserDTO getUserByCredentials(String username, String password);

    String generateUsernameFromEmail(String email);

    UserDTO updateUser(Long id, UserUpdateRequest input);

    BindDTO createBind(Long userId, BindUpdateRequest input);

    BindDTO updateBind(Long userId, Long bindId, BindUpdateRequest input);

    boolean deleteBind(Long id, Long bindId);

    ProtectedUser createProtectedUser(Long userId);

    ProtectedBind createProtectedBind(Bind bind);

    boolean existsUserWithEmail(String email);

    boolean existsUserWithUsername(String username);
}
