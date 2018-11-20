package student.manchester.dao.user.impl;

import org.springframework.stereotype.Repository;
import student.manchester.dao.GenericDaoHibernate;
import student.manchester.dao.user.UserDao;
import student.manchester.model.auth.User;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.List;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Repository
public class UserDaoImpl extends GenericDaoHibernate<User, Long> implements UserDao {

    @Override
    public boolean existsUserWithEmail(final String email) {
        final CriteriaBuilder builder = getCriteriaBuilder();
        final CriteriaQuery<User> criteria = createQuery();
        final Root<User> table = criteria.from(User.class);
        criteria.select(table)
                .where(builder.equal(table.get("email"), email));
        return !getList(criteria).isEmpty();
    }

    @Override
    public User findBy(final String email, final String password) {
        final CriteriaBuilder builder = getCriteriaBuilder();
        final CriteriaQuery<User> criteria = createQuery();
        final Root<User> table = criteria.from(User.class);
        criteria.select(table)
                .where(
                  builder.equal(table.get("email"), email),
                  builder.equal(table.get("password"), password)
                );
        return getUser(criteria);
    }

    @Override
    public List<User> findByUsernameStarting(final String prefix) {
        final CriteriaBuilder builder = getCriteriaBuilder();
        final CriteriaQuery<User> criteria = createQuery();
        final Root<User> table = criteria.from(User.class);
        criteria.select(table)
                .where(builder.like(table.get("username"), prefix + "%"))
                .orderBy(builder.desc(table.get("username")));
        return getList(criteria);
    }

    private List<User> getList(final CriteriaQuery<User> criteria) {
        return getSession().createQuery(criteria).list();
    }

    private User getUser(final CriteriaQuery<User> criteria) {
        final List<User> matchingUsers = getList(criteria);
        return hasExactlyOneElement(matchingUsers) ? matchingUsers.get(0) : null;
    }

    private boolean hasExactlyOneElement(final List<User> list) {
        return list != null && list.size() == 1;
    }
}
