package student.manchester.integration.api.user;

import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import student.manchester.api.common.bean.AuthenticatedResponse;
import student.manchester.api.user.bean.BindResponse;
import student.manchester.api.user.bean.BindUpdateRequest;
import student.manchester.api.user.bean.ProfileResponse;
import student.manchester.api.user.bean.UserUpdateRequest;
import student.manchester.controller.bean.AuthenticationForm;
import student.manchester.controller.bean.LoginResponse;
import student.manchester.integration.IntegrationTest;
import student.manchester.model.auth.Roles;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.model.user.dto.UserDTO;

import java.util.List;
import java.util.Optional;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.empty;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasKey;
import static org.hamcrest.Matchers.not;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static student.manchester.configuration.security.JWTAuthenticationTokenFilter.TOKEN_COOKIE_NAME;

/**
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public class UserApiTest extends IntegrationTest {

    private static UserDTO user;
    private static UserDTO distractor;
    private static String token;
    private static BindDTO bind;

    // The User Api operates on existing users, so populate
    // the system with a user
    @Override
    public void setUpInitialData() {
        user = new UserDTO.Builder()
                .setRole(Roles.USER)
                .setEmail("testing@abv.com")
                .setPassword("%ppssAAWW45")
                .setUsername("andrea")
                .setFirstName("Negan")
                .setLastName("Bombington")
                .setPhone("+444503023410")
                .setPostcode("M16 2IF")
                .build();
        distractor = new UserDTO.Builder()
                .setRole(Roles.USER)
                .setEmail("tesaaag@abv.com")
                .setPassword("%ppssAW4645")
                .setUsername("tagTeamBattle")
                .setFirstName("Kiril")
                .setLastName("Methodii")
                .setPhone("+44450312310")
                .setPostcode("WC2H 7LT")
                .build();
        signUp(distractor);
        final ProfileResponse response = signUp(user);
        token = response.getToken();
        bind = new BindDTO.Builder()
                .setIcon("FACEBOOK_ICON")
                .setName("Facebook")
                .setUrl("https://www.facebook.com/?profile=isjdiajdia12323jijsd")
                .build();
        final BindResponse bindResponse = createBind(user.getId(), token,  bind);
        token = bindResponse.getToken();
    }

    @Test
    public void getProfileDataTest() {
        final Response response = getProfileData(user.getId(), token);
        assertThatUserDataIsTheSame(response, user);
        assertThatBindExists(response, bind);
    }

    @Test
    public void updateProfileDataTest() {
        /* ---------------------- HAPPY PATHS ---------------------- */
        final UserUpdateRequest update = new UserUpdateRequest();
        // Update is successful, but the data is the same
        assertThatUserDataIsTheSame(updateUserRequest(user.getId(), token, update), user);

        // Update only 1 property
        user.setFirstName("Juliano");
        update.setFirstName(user.getFirstName());
        assertThatUserDataIsTheSame(updateUserRequest(user.getId(), token, update), user);

        // Update many properties at once
        user.setLastName("Russels");
        update.setLastName(user.getLastName());
        user.setPhone("+447410984375");
        update.setPhone(user.getPhone());
        user.setPostcode("M20 7JH");
        update.setPostcode(user.getPostcode());
        user.setUsername("jjRussel909");
        update.setUsername(user.getUsername());
        // don't change it this one on next update
        update.setFirstName(null);
        assertThatUserDataIsTheSame(updateUserRequest(user.getId(), token, update), user);


        /* --------------------- UNHAPPY PATHS --------------------- */
        final UserUpdateRequest incorrectUpdate = new UserUpdateRequest();
        // not valid e-mail
        incorrectUpdate.setEmail("invalid-email");
        updateUserRequest(user.getId(), token, incorrectUpdate).then()
                .assertThat().body("ok", equalTo(false))
                .assertThat().body("errors", hasKey("email"));
        // e-mail already taken by other user
        incorrectUpdate.setEmail(distractor.getEmail());
        updateUserRequest(user.getId(), token, incorrectUpdate).then()
                .assertThat().body("ok", equalTo(false))
                .assertThat().body("errors", hasKey("email"));
        // TODO: continue update validations
    }

    @Test
    public void createBindTest() {
        /* ---------------------- HAPPY PATHS ---------------------- */
        final String icon = "INSTAGRAM_ICON";
        final String name = "Instagram";
        final String url = "https://www.instagram.com/?profile=isjdiajdia12323jijsd";
        final BindDTO bind2 = new BindDTO.Builder()
                .setIcon(icon)
                .setName(name)
                .setUrl(url)
                .build();
        createBind(user.getId(), token,  bind2);
        assertThatBindExists(getProfileData(user.getId(), token), bind2);


        /* --------------------- UNHAPPY PATHS --------------------- */
        // Without Url
        bind2.setUrl(null);
        createBind(user.getId(), token,  bind2, false);
        assertThatBindIsMissing(getProfileData(user.getId(), token), bind2);
        bind2.setUrl(url);

        // Without Name
        bind2.setName(null);
        createBind(user.getId(), token,  bind2, false);
        assertThatBindIsMissing(getProfileData(user.getId(), token), bind2);
        bind2.setName(name);

        // Without icon
        bind2.setIcon(null);
        createBind(user.getId(), token,  bind2, false);
        assertThatBindIsMissing(getProfileData(user.getId(), token), bind2);
        bind2.setIcon(icon);
    }

    @Test
    public void updateBindTest() {
        final String newName = "New_Bind_Name";
        final String newUrl = "http://www.rebind.com/";
        final String newIcon = "REBIND_ICON";
        /* ---------------------- HAPPY PATHS ---------------------- */
        // Update is successful, but the data is the same
        final BindUpdateRequest update = new BindUpdateRequest();
        updateBindTroughApi(user.getId(), bind.getId(), token, update);
        assertThatBindExists(getProfileData(user.getId(), token), bind);

        // Update only 1 property
        update.setName(newName);
        bind.setName(newName);
        updateBindTroughApi(user.getId(), bind.getId(), token, update);
        assertThatBindExists(getProfileData(user.getId(), token), bind);

        // Update multiple properties
        update.setUrl(newUrl);
        bind.setUrl(newUrl);
        update.setIcon(newIcon);
        bind.setIcon(newIcon);
        // Do not update bind name, but then assert it is present.
        update.setName(null);
        updateBindTroughApi(user.getId(), bind.getId(), token, update);
        assertThatBindExists(getProfileData(user.getId(), token), bind);
    }

    @Test
    public void deleteBindTest() {
        final String icon = "INSTAGRAM_ICON";
        final String name = "Instagram";
        final String url = "https://www.instagram.com/?profile=isjdiajdia12323jijsd";
        final BindDTO bind2 = new BindDTO.Builder()
                .setIcon(icon)
                .setName(name)
                .setUrl(url)
                .build();
        createBind(user.getId(), token,  bind2);
        assertThatBindExists(getProfileData(user.getId(), token), bind2);

        deleteBind(user.getId(), bind2.getId(), token);
        assertThatBindIsMissing(getProfileData(user.getId(), token), bind2);
    }

    @Test
    public void getCardsTest() {
        // TODO: fail("TODO: implement test");
    }

    private Response deleteBind(final Long userId, final Long bindId, final String token) {
        return given().cookie(TOKEN_COOKIE_NAME, token)
                .when().delete("/api/user/" + userId + "/bind/" + bindId);
    }

    private BindResponse createBind(final Long userId, final String token, final BindDTO bind) {
        return createBind(userId, token, bind, true);
    }

    private BindResponse createBind(final Long userId, final String token,
                                    final BindDTO bind, final boolean requireIsOk) {
        final BindUpdateRequest requestData = new BindUpdateRequest();
        requestData.setIcon(bind.getIcon());
        requestData.setName(bind.getName());
        requestData.setUrl(bind.getUrl());
        final BindResponse response = createBindTroughApi(userId, token, requestData, requireIsOk);
        Optional.ofNullable(response.getBind())
                .ifPresent(responseBind -> bind.setId(responseBind.getId()));
        return response;
    }

    private BindResponse createBindTroughApi(final Long userId, final String token,
                                             final BindUpdateRequest requestData, final boolean requireIsOk) {
        final BindResponse response = createBindRequest(userId, token, requestData)
                .body().as(BindResponse.class);
        if(requireIsOk) {
            responseHasToken(response);
        }
        return response;
    }

    private Response createBindRequest(final Long userId, final String token, final BindUpdateRequest requestData) {
        return given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .cookie(TOKEN_COOKIE_NAME, token)
                .request().body(requestData)
                .when()
                .post("/api/user/" + userId + "/bind");
    }

    private BindResponse updateBindTroughApi(final Long userId, final Long bindId, final String token,
                                             final BindUpdateRequest requestData) {
        return updateBindTroughApi(userId, bindId, token, requestData, true);
    }

    private BindResponse updateBindTroughApi(final Long userId, final Long bindId, final String token,
                                             final BindUpdateRequest requestData, final boolean requireIsOk) {
        final BindResponse response = updateBindRequest(userId, bindId, token, requestData)
                .body().as(BindResponse.class);
        if(requireIsOk) {
            responseHasToken(response);
        }
        return response;
    }

    private Response updateBindRequest(final Long userId, final Long bindId, final String token, final BindUpdateRequest requestData) {
        return given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .cookie(TOKEN_COOKIE_NAME, token)
                .request().body(requestData)
                .when()
                .put("/api/user/" + userId + "/bind/" + bindId);
    }

    private static ProfileResponse signUp(final UserDTO user) {
        final AuthenticationForm input = new AuthenticationForm();
        input.setUsername(user.getEmail());
        input.setPassword(user.getPassword());
        final LoginResponse loginResponse = signUpTroughApi(input);
        user.setId(loginResponse.getId());
        // update user
        return updateUser(user, loginResponse);
    }

    private static LoginResponse signUpTroughApi(final AuthenticationForm input) {
        final LoginResponse response = given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .request().body(input)
                .when()
                .post("/signUp")
                .body().as(LoginResponse.class);
        responseHasToken(response);
        return response;
    }

    private static ProfileResponse updateUser(final UserDTO user, final LoginResponse loginResponse) {
        final UserUpdateRequest update = new UserUpdateRequest();
        update.setFirstName(user.getFirstName());
        update.setLastName(user.getLastName());
        update.setPhone(user.getPhone());
        update.setPostcode(user.getPostcode());
        update.setUsername(user.getUsername());
        return updateUserTroughApi(user.getId(), loginResponse.getToken(), update);
    }

    private static ProfileResponse updateUserTroughApi(final Long userId, final String token,
                                                final UserUpdateRequest update) {
        final ProfileResponse response = updateUserRequest(userId, token, update)
                .body().as(ProfileResponse.class);
        responseHasToken(response);
        return response;
    }

    private static Response updateUserRequest(final Long userId, final String token, final UserUpdateRequest update) {
        return given()
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .cookie(TOKEN_COOKIE_NAME, token)
                .request().body(update)
                .when()
                .put("/api/user/" + userId + "/profile");
    }

    private static void responseHasToken(final AuthenticatedResponse response) {
        assertTrue("Response was not OK.", response.isOk());
        assertNotNull("No token was retrieved.", response.getToken());
    }

    private Response getProfileData(final Long userId, final String token) {
        return given()
                .cookie(TOKEN_COOKIE_NAME, token)
                .when()
                .get("/api/user/" + userId + "/profile");
    }

    private Response assertThatUserDataIsTheSame(final Response response, final UserDTO user) {
        response.then()
                .assertThat().statusCode(HttpStatus.OK.value()).and()
                .assertThat().contentType(MediaType.APPLICATION_JSON_VALUE).and()
                .assertThat().body("user", notNullValue()).and()
                .assertThat().body("user.email", equalTo(user.getEmail())).and()
                .assertThat().body("user.password", nullValue()).and()
                .assertThat().body("user.username", equalTo(user.getUsername())).and()
                .assertThat().body("user.firstName", equalTo(user.getFirstName())).and()
                .assertThat().body("user.lastName", equalTo(user.getLastName())).and()
                .assertThat().body("user.phone", equalTo(user.getPhone())).and()
                .assertThat().body("user.postcode", equalTo(user.getPostcode()));
        return response;
    }

    private Response assertThatBindExists(final Response response, final BindDTO bind) {
        final List<BindDTO> binds = getBindsFromProfileDataResponse(response);
        assertTrue("The user didn't contain correct bind.", binds.contains(bind));
        return response;
    }

    private Response assertThatBindIsMissing(final Response response, final BindDTO bind) {
        final List<BindDTO> binds = getBindsFromProfileDataResponse(response);
        assertFalse("The user contained bind.", binds.contains(bind));
        return response;
    }

    private List<BindDTO> getBindsFromProfileDataResponse(final Response response) {
        final JsonPath result = response.then()
                .assertThat().statusCode(HttpStatus.OK.value()).and()
                .assertThat().contentType(MediaType.APPLICATION_JSON_VALUE).and()
                .assertThat().body("user.binds", not(empty())).and()
                .extract().body().jsonPath();
        return result.getList("user.binds", BindDTO.class);
    }
}
