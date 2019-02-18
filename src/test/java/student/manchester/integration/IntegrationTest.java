package student.manchester.integration;

import io.restassured.RestAssured;
import org.junit.Before;
import org.junit.BeforeClass;
import student.manchester.common.H2DBTest;

/**
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public abstract class IntegrationTest extends H2DBTest {

    private static boolean setUpIsNotCompleted = true;

    @Before
    public void setUp() {
        RestAssured.port = getPort();
        if(setUpIsNotCompleted) {
            setUpInitialData();
            setUpIsNotCompleted = false;
        }
    }

    public void setUpInitialData() {}
}
