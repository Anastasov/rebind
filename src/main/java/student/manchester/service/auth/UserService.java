package student.manchester.service.auth;

import student.manchester.model.auth.User;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
public interface UserService {

    User findByUsername(String username);
}
