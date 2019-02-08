package unit.student.manchester.dao;

import common.H2DBTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.dao.auth.RoleDao;
import student.manchester.model.auth.Role;

import static util.AssertUtil.areNotTheSame;
import static util.AssertUtil.areTheSame;
import static util.AssertUtil.assertExceptionIsNotThrown;

/**
 * The aim of this test is to test {@link student.manchester.dao.GenericDaoHibernate},
 * that all DAO classes extend to gain access to basic DB operations. The generic DAO
 * uses Hibernate as its underlying structure and relies on the persistence context
 * introduced by it. As this is an abstract class, it cannot be tested directly.
 * But it's methods can be tested by using an implementor, who doesn't override them.
 *
 * @author Anastas Anastasov
 * on 2/7/2019.
 */
public class GenericDaoTest extends H2DBTest {

    @Autowired
    private RoleDao roleDao;

    /* ---------------------------- SAVE ENTITY ---------------------------- */
    @Test
    public void saveEntity() {
        final Role role = getAcceptableRole();
        assertExceptionIsNotThrown(() -> roleDao.save(role));
    }

    /* --------------------------- DELETE ENTITY --------------------------- */
    @Test
    public void deleteEntity() {
        final Role role = getAcceptableRole();
        assertExceptionIsNotThrown(() -> roleDao.save(role));
        assertExceptionIsNotThrown(() -> {roleDao.delete(role); return null;});
    }

    /* ---------------------------- GET ENTITY ----------------------------- */
    @Test
    public void getEntity() {
        final Role role = getAcceptableRole();
        final Long id = (Long) roleDao.save(role);
        // Hibernate always returns a db hit or null with .get
        areTheSame(role, roleDao.get(id));
    }

    /* --------------------------- LOAD ENTITY ----------------------------- */
    @Test
    public void loadEntity() {
        final Role role = getAcceptableRole();
        final Long id = (Long) roleDao.save(role);
        // Hibernate always returns a proxy on load, and throws 'not found' exception only when accessing it
        final Role dbRole = roleDao.load(id);
        // proxy and actual object
        areNotTheSame(role, dbRole);
        assertExceptionIsNotThrown(dbRole::getId);
    }

    /* --------------------------- UNWRAP ENTITY --------------------------- */
    @Test
    public void unwrapEntity() {
        final Role role = getAcceptableRole();
        final Long id = (Long) roleDao.save(role);
        // Hibernate always returns a proxy on load, and throws 'not found' exception only when accessing it
        final Role dbRole = roleDao.load(id);
        // proxy and actual object
        areNotTheSame(role, dbRole);
        // actual object
        areTheSame(role, roleDao.unwrap(id));
    }

    /* ----------------------- SAVE OR UPDATE ENTITY ------------------------- */
    @Test
    public void updateEntity() {
        final Role role = getAcceptableRole();
        final Long id = (Long) roleDao.save(role);
        // Hibernate always returns a db hit or null with .get
        // It also stays in the persistance context, so there is no need to reload it.
        final Role dbRole = roleDao.get(id);
        areTheSame(role, dbRole);

        // now change name and assert they are different
        role.setName("updated-name");
        areNotTheSame(role, dbRole);
        // do update
        roleDao.saveOrUpdate(role);
        areTheSame(role, dbRole);
    }


    private Role getAcceptableRole() {
        final Role role = new Role();
        role.setName("test-role");
        return role;
    }
}
