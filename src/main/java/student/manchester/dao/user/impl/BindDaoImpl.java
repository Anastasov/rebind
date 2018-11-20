package student.manchester.dao.user.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.user.BindDao;
import student.manchester.model.auth.Bind;

/**
 * @author Anastas Anastasov
 * on 11/17/2018.
 */
@Repository
public class BindDaoImpl extends GenericDaoHibernate<Bind, Long> implements BindDao {
}
