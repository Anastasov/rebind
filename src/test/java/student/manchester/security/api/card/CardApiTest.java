package student.manchester.security.api.card;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import student.manchester.api.card.bean.CardCreateRequest;
import student.manchester.api.card.bean.CardUpdateRequest;
import student.manchester.model.auth.Roles;
import student.manchester.model.card.Card;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.dto.ProtectedUserDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.security.AbstractSecurityTest;
import student.manchester.service.card.CardService;
import student.manchester.util.SecurityUtil;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

/**
 * This class is concerned with testing api-specific security setting.
 * In this case the business rule is: CardApi can be accessed only by:
 *      * Currently logged user (for his own cards) or
 *      * User Having with {@link Roles#ADMIN} role.
 *
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public class CardApiTest extends AbstractSecurityTest {

    private static final Long VIEWED_USER_PROFILE = 5L;
    private static final Long VIEWING_USER_PROFILE = 3L;

    @MockBean
    private CardService cardService;

    @Test
    public void getCardDataTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/card/" + VIEWED_USER_PROFILE;
        when(cardService.findById(anyLong())).thenReturn(cardForUser(VIEWED_USER_PROFILE));
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
    public void createCardTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/card/";
        when(cardService.createCard(anyLong(), any())).thenReturn(new CardDTO());
        final CardCreateRequest mockInput = new CardCreateRequest();
        mockInput.setUserId(VIEWED_USER_PROFILE);
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
    public void updateCardTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/card/5";
        final CardUpdateRequest mockInput = new CardUpdateRequest();
        when(cardService.updateCard(anyLong(), any())).thenReturn(cardForUser(VIEWED_USER_PROFILE));
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
    public void deleteCardTest() {
        // No-one except admin should have access to another user-s profile.
        final String apiUrl = "/api/card/5";
        when(cardService.deleteCard(anyLong())).thenReturn(Optional.of(cardForUser(VIEWED_USER_PROFILE)));
        SecurityUtil.getRoles().exclude(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        deleteRequest(apiUrl), HttpStatus.FORBIDDEN.value()));

        // Admin is ok to access user data
        SecurityUtil.getRoles(Roles.ADMIN).stream()
                .map(SecurityUtil.roleToNewUserWithId(VIEWING_USER_PROFILE))
                .forEach(expectResponseStatus(
                        deleteRequest(apiUrl), HttpStatus.OK.value()));

        // Every Role can view it's own profile data
        SecurityUtil.getAllRoles()
                .map(SecurityUtil.roleToNewUserWithId(VIEWED_USER_PROFILE))
                .forEach(expectResponseStatus(
                        deleteRequest(apiUrl), HttpStatus.OK.value()));
    }

    private CardDTO cardForUser(final Long id) {
        final CardDTO card = new CardDTO();
        final ProtectedUserDTO protectedUser = new ProtectedUserDTO();
        protectedUser.setId(id);
        card.setUser(protectedUser);
        return card;
    }
}
