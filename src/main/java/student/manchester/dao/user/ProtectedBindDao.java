package student.manchester.dao.user;

import student.manchester.dao.GenericDao;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.user.ProtectedUser;

import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public interface ProtectedBindDao extends GenericDao<ProtectedBind, Long> {

    List<ProtectedBind> loadByBindId(Long id);
}
