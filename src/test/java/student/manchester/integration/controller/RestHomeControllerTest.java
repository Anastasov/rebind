package student.manchester.integration.controller;

import io.restassured.response.Response;
import org.hamcrest.Matcher;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.springframework.http.MediaType;
import student.manchester.controller.bean.AuthenticationForm;
import student.manchester.integration.IntegrationTest;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.allOf;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasKey;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.notNullValue;

/**
 * @author Anastas Anastasov
 * on 2/16/2019.
 */
public class RestHomeControllerTest extends IntegrationTest {

    private static final String VALID_PASSWORD = "notValidPassword123";
    private static final String VALID_EMAIL = "test@abv.com";

    @Test
    public void signUpTest() throws Exception {
        // Assert error on empty form
        final AuthenticationForm input = new AuthenticationForm();
        newRequestFor(signUp(input))
            .assertNotOk("username", "password");

        // Assert error on incorrect username form
        input.setUsername("");
        newRequestFor(signUp(input))
                .assertNotOk("username", "password");
        input.setPassword("");
        newRequestFor(signUp(input))
                .assertNotOk("username", "password");

        // Assert error on incorrect e-mail
        input.setUsername("not-valid-email");
        input.setPassword("not-valid-password");
        newRequestFor(signUp(input))
                .assertNotOk("email");

        // Assert error on incorrect password
        input.setUsername(VALID_EMAIL);
        newRequestFor(signUp(input))
                .assertNotOkForField("username","password");

        // Add 8 symbols
        input.setPassword("ntVid12");
        newRequestFor(signUp(input))
                .assertNotOk("password");

        // Add Upper Case Letters
        input.setPassword("notValidPassword");
        newRequestFor(signUp(input))
                .assertNotOk("password");

        // Add Digits Letters
        input.setPassword("notValid Password123");
        newRequestFor(signUp(input))
                .assertNotOk("password");

        // No white-space allowed
        input.setPassword(VALID_PASSWORD);
        newRequestFor(signUp(input))
                .assertOk();

        // Cannot have duplicate e-mail
        newRequestFor(signUp(input))
                .assertNotOk("email");

        // Assert different e-mail can sign-up incorrect password
        input.setUsername("tt" + VALID_EMAIL);
        newRequestFor(signUp(input))
                .assertOk();
    }

    @Test
    public void loginTest() {
        // Assert error on empty form
        final AuthenticationForm input = new AuthenticationForm();
        newRequestFor(signUp(input))
                .assertNotOk("username", "password");

        // Assert credentials don't match user
        input.setUsername("t2" + VALID_EMAIL);
        input.setPassword(VALID_PASSWORD);
        newRequestFor(login(input))
                .assertErrorContains("credentials did not match");

        // create user
        newRequestFor(signUp(input))
                .assertOk();
        // now log him in
        newRequestFor(login(input))
                .assertOk();
    }


    private Response signUp(final AuthenticationForm input) {
        return given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .request().body(input)
            .when()
                .post("/signUp");
    }

    private Response login(final AuthenticationForm input) {
        return given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .request().body(input)
            .when()
                .post("/login");
    }

    private RequestResponseBuilder newRequestFor(final Response response) {
        return new RequestResponseBuilder(response);
    }

    private class RequestResponseBuilder {
        private Response response;
        private RequestResponseBuilder(final Response request) { this.response = request;}
        private RequestResponseBuilder assertNotOk(final String... errorFields) {
            response.then()
                    .assertThat().contentType(MediaType.APPLICATION_JSON_VALUE).and()
                    .assertThat().body("ok", equalTo(false)).and()
                    .assertThat().body("message", notNullValue()).and()
                    .assertThat().body("errors", hasAllKeys(errorFields));
            return this;
        }

        private RequestResponseBuilder assertNotOkForField(final String correctField,
                                                           final String... errorFields) {
            response.then()
                    .assertThat().contentType(MediaType.APPLICATION_JSON_VALUE).and()
                    .assertThat().body("ok", equalTo(false)).and()
                    .assertThat().body("message", notNullValue()).and()
                    .assertThat().body("errors", hasAllKeys(errorFields)).and()
                    .assertThat().body("errors", not(hasKey(correctField)));
            return this;
        }

        private RequestResponseBuilder assertOk() {
            response.then()
                    .assertThat().contentType(MediaType.APPLICATION_JSON_VALUE).and()
                    .assertThat().body("ok", equalTo(true)).and()
                    .assertThat().body("message", notNullValue()).and()
                    .assertThat().body("token", notNullValue()).and()
                    .assertThat().body("email", notNullValue()).and()
                    .assertThat().body("id", notNullValue());
            return this;
        }

        private RequestResponseBuilder assertErrorContains(final String error) {
            response.then()
                    .assertThat().contentType(MediaType.APPLICATION_JSON_VALUE).and()
                    .assertThat().body("ok", equalTo(false)).and()
                    .assertThat().body("message", containsString(error));
            return this;
        }

    }

    private Matcher<Map<? extends String, ?>> hasAllKeys(final String... errorFields) {
        return allOf(Stream.of(errorFields)
                .map(Matchers::hasKey)
                .collect(Collectors.toList()));
    }


}
