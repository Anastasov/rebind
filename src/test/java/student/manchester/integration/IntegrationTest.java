package student.manchester.integration;

import io.restassured.RestAssured;
import org.junit.Before;
import student.manchester.common.H2DBTest;

/**
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public abstract class IntegrationTest extends H2DBTest {

    @Before
    public void setUp() {
        RestAssured.port = getPort();
    }
}
