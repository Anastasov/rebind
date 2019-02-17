package student.manchester.common;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import student.manchester.ReBindApplication;
import student.manchester.configuration.test.TestDatabaseConfiguration;
import student.manchester.configuration.test.TestFlywayConfiguration;
import student.manchester.configuration.test.TestHibernateConfiguration;

/**
 * @author Anastas Anastasov
 * on 2/6/2019.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
        ReBindApplication.class,
        TestDatabaseConfiguration.class,
        TestFlywayConfiguration.class,
        TestHibernateConfiguration.class},
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Transactional
@ActiveProfiles("test")
public abstract class H2DBTest {

    @LocalServerPort
    private int port;

    protected int getPort() { return this.port; }

}
