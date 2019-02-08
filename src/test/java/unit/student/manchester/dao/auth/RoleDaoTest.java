package unit.student.manchester.dao.auth;

import common.ProvisioningH2DBTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.dao.auth.RoleDao;
import student.manchester.model.auth.Role;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static util.AssertUtil.areTheSame;

/**
 * @author Anastas Anastasov
 * on 2/8/2019.
 */
public class RoleDaoTest extends ProvisioningH2DBTest {

    private static final String ROLE_NAME = "test-role";

    @Autowired
    private RoleDao roleDao;

    @Test
    public void getRoleByNameTest() {
        final Role role = new Role();
        role.setName(ROLE_NAME);
        roleDao.save(role);
        final Role expectedRole = roleDao.getRoleByName(ROLE_NAME);
        assertNotNull("Didn't find a Role.", expectedRole);
        assertTrue("Found different Role.", areTheSame(role, expectedRole));
    }


}
