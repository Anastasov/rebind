package student.manchester.dao.auth;

import student.manchester.dao.GenericDao;
import student.manchester.model.auth.User;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public interface UserDao extends GenericDao<User, Long> {

    boolean existsUserWithEmail(String email);

    User findBy(String email, String password);
}