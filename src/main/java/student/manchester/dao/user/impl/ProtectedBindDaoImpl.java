package student.manchester.dao.user.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.model.bind.ProtectedBind;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Repository
public class ProtectedBindDaoImpl extends GenericDaoHibernate<ProtectedBind, Long>
        implements ProtectedBindDao {

    @Override
    public List<ProtectedBind> loadByBindId(final Long id) {
        final CriteriaBuilder builder = getCriteriaBuilder();
        final CriteriaQuery<ProtectedBind> criteria = createQuery();
        final Root<ProtectedBind> table = criteria.from(ProtectedBind.class);
        criteria.select(table)
                .where(builder.equal(getAssociation(table,"bind.id"), id));
        return getList(criteria);
    }
}
