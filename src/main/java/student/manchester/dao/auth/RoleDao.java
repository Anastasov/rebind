package student.manchester.dao.auth;

import student.manchester.dao.GenericDao;
import student.manchester.model.auth.Role;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public interface RoleDao extends GenericDao<Role, Long> {

    Role getRoleByName(String name);
}
