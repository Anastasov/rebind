package student.manchester.dao.auth.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.auth.RoleDao;
import student.manchester.model.auth.Role;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Repository
public class RoleDaoImpl extends GenericDaoHibernate<Role, Long> implements RoleDao {

    @Override
    public Role getRoleByName(final String name) {
        final CriteriaBuilder builder = getCriteriaBuilder();
        final CriteriaQuery<Role> criteria = createQuery();
        final Root<Role> table = criteria.from(Role.class);
        criteria.select(table)
                .where(builder.equal(table.get("name"), name));
        return getSession().createQuery(criteria).getSingleResult();
    }
}
