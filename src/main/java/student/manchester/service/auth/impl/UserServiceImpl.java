package student.manchester.service.auth.impl;

import student.manchester.annotation.TransactionalService;
import student.manchester.model.auth.User;
import student.manchester.service.auth.UserService;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@TransactionalService
public class UserServiceImpl implements UserService {

    @Override
    public User findByUsername(final String username) {
        return null;
    }
}
