package student.manchester.dao.user.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.user.ProtectedUserDao;
import student.manchester.model.user.ProtectedUser;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Repository
public class ProtectedUserDaoImpl extends GenericDaoHibernate<ProtectedUser, Long>
        implements ProtectedUserDao {
}
