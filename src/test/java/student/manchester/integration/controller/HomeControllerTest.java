package student.manchester.integration.controller;

import io.restassured.http.Cookie;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import student.manchester.integration.IntegrationTest;
import student.manchester.model.auth.Roles;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.JWTTokenizerService;
import student.manchester.service.user.UserService;
import student.manchester.util.SecurityUtil;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsString;
import static org.mockito.Mockito.when;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_COOKIE_NAME;

/**
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public class HomeControllerTest extends IntegrationTest {

    @Autowired
    private JWTTokenizerService tokenizerService;

    @MockBean
    private UserService userService;

    private static final String REACT_APP_SCRIPT_NAME = "rebind-app.js";

    @Test
    public void homeTest() {
        assertPageIsAccessable("/");
    }

    @Test
    public void homePageTest() {
        assertPageIsAccessable("/home");
    }

    @Test
    public void profilePageTest() {
        final UserDTO user = SecurityUtil.roleToNewUser(Roles.USER);
        when(userService.findById(user.getId())).thenReturn(user);
        final String token = tokenizerService.generate(user);
        assertPageIsAccessable(setTokenAsCookie(token), "/profile");
    }

    @Test
    public void cardsPageTest() {
        final UserDTO user = SecurityUtil.roleToNewUser(Roles.USER);
        when(userService.findById(user.getId())).thenReturn(user);
        final String token = tokenizerService.generate(user);
        assertPageIsAccessable(setTokenAsCookie(token), "/cards");
    }

    @Test
    public void contactsPageTest() {
        final UserDTO user = SecurityUtil.roleToNewUser(Roles.USER);
        when(userService.findById(user.getId())).thenReturn(user);
        final String token = tokenizerService.generate(user);
        assertPageIsAccessable(setTokenAsCookie(token), "/contacts");
    }

    @Test
    public void loginPageTest() {
        assertPageIsAccessable("/login");
    }

    @Test
    public void signUpPageTest() {
        assertPageIsAccessable("/signUp");
    }

    private RequestSpecification setTokenAsCookie(final String token) {
        return given()
                .cookie(new Cookie.Builder(TOKEN_COOKIE_NAME, token).build());
    }

    private ValidatableResponse assertPageIsAccessable(final String url) {
        return assertPageIsAccessable(given(), url);
    }

    private ValidatableResponse assertPageIsAccessable(final RequestSpecification requestSpecification, final String url) {
        return requestSpecification
        .when()
                .get(url)
        .then()
                .assertThat().statusCode(HttpStatus.OK.value()).and()
                .assertThat().contentType(MediaType.TEXT_HTML_VALUE).and()
                .assertThat().content(containsString(REACT_APP_SCRIPT_NAME));
    }
}
