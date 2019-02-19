package student.manchester.dao.user;

import student.manchester.dao.GenericDao;
import student.manchester.model.user.User;

import java.util.List;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public interface UserDao extends GenericDao<User, Long> {

    boolean existsUserWithEmail(String email);

    User findBy(String email, String password);

    List<User> findByUsernameStarting(String prefix);

    boolean existsUserWithUsername(String username);
}
