package student.manchester.security.api.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import student.manchester.api.user.bean.BindUpdateRequest;
import student.manchester.api.user.bean.UserUpdateRequest;
import student.manchester.model.auth.Roles;
import student.manchester.model.bind.dto.BindDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.security.AbstractSecurityTest;
import student.manchester.service.card.CardService;
import student.manchester.util.SecurityUtil;

import java.util.ArrayList;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

/**
 * This class is concerned with testing api-specific security setting.
 * In this case the business rule is: UserApiTest can be accessed only by:
 *      * Currently logged user (for himself) or
 *      * User Having with {@link Roles#ADMIN} role.
 *
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public class UserApiSecurityTest extends AbstractSecurityTest {

    private static final Long VIEWED_USER_PROFILE = 5L;
    private static final Long VIEWING_USER_PROFILE = 3L;

    @MockBean
    private CardService cardService;

    @Test
    public void getProfileDataTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/user/" + VIEWED_USER_PROFILE + "/profile";
        when(cardService.getCards(anyLong())).thenReturn(new ArrayList<>());
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        getRequest(apiUrl), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        getRequest(apiUrl), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        getRequest(apiUrl), HttpStatus.OK.value()));
    }

    @Test
    public void getCardsTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/user/" + VIEWED_USER_PROFILE + "/cards";
        when(cardService.getCards(anyLong())).thenReturn(new ArrayList<>());
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        getRequest(apiUrl), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        getRequest(apiUrl), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        getRequest(apiUrl), HttpStatus.OK.value()));
    }

    @Test
    public void updateProfileDataTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/user/" + VIEWED_USER_PROFILE + "/profile";
        final UserUpdateRequest mockInput = new UserUpdateRequest();
        when(userService.updateUser(anyLong(), any())).thenReturn(new UserDTO());
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        putRequest(apiUrl, mockInput), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        putRequest(apiUrl, mockInput), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        putRequest(apiUrl, mockInput), HttpStatus.OK.value()));
    }

    @Test
    public void createBindTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/user/" + VIEWED_USER_PROFILE + "/bind";
        final BindUpdateRequest mockInput = new BindUpdateRequest();
        when(userService.createBind(anyLong(), any())).thenReturn(new BindDTO());
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        postRequest(apiUrl, mockInput), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        postRequest(apiUrl, mockInput), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        postRequest(apiUrl, mockInput), HttpStatus.OK.value()));
    }

    @Test
    public void updateBindTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/user/" + VIEWED_USER_PROFILE + "/bind/5";
        final BindUpdateRequest mockInput = new BindUpdateRequest();
        when(userService.updateBind(anyLong(), anyLong(), any())).thenReturn(new BindDTO());
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        putRequest(apiUrl, mockInput), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        putRequest(apiUrl, mockInput), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        putRequest(apiUrl, mockInput), HttpStatus.OK.value()));
    }

    @Test
    public void deleteBindTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/user/" + VIEWED_USER_PROFILE + "/bind/5";
        final BindUpdateRequest mockInput = new BindUpdateRequest();
        when(userService.deleteBind(anyLong(), anyLong())).thenReturn(true);
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        deleteRequest(apiUrl, mockInput), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        deleteRequest(apiUrl, mockInput), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        deleteRequest(apiUrl, mockInput), HttpStatus.OK.value()));
    }
}
