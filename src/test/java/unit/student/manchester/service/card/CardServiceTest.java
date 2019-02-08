package unit.student.manchester.service.card;

import common.H2DBTest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import student.manchester.api.card.bean.CardCreateRequest;
import student.manchester.dao.card.CardDao;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;
import student.manchester.service.card.CardService;
import student.manchester.service.card.impl.CardServiceImpl;
import student.manchester.service.user.UserService;

import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

/**
 * @author Anastas Anastasov
 * on 2/7/2019.
 */
@RunWith(MockitoJUnitRunner.class)
public class CardServiceTest {

    private static final String NAME = "test";
    private static final String ICON = "icon:test";
    private static final String URL = "http://test";

    @Mock
    private CardDao cardDao;

    @Mock
    private UserService userService;

    @Mock
    private ProtectedBindDao protectedBindDao;

    @InjectMocks
    private CardService cardService = new CardServiceImpl();

    @Test
    public void createCardTest() {
        when(userService.createProtectedUser(anyLong()))
                .thenReturn(creteProtectedUser());
        final Long userId = 5L;
        final CardCreateRequest createRequest = new CardCreateRequest();
        createRequest.setName(NAME);
        createRequest.setUserId(userId);
        final CardDTO cardDTO = cardService.createCard(userId, createRequest);
        assertTrue("CardDTO is empty", cardDTO != null && cardDTO.getUser() != null);
    }

    private ProtectedBind createProtectedBind() {
        final ProtectedBind protectedBind = new ProtectedBind();
        final Bind bind = new Bind();
        bind.setName(NAME);
        bind.setIcon(ICON);
        bind.setUrl(URL);
        bind.setUser(new User());
        protectedBind.setBind(bind);
        protectedBind.setBindCheck(Boolean.TRUE);
        return protectedBind;
    }

    private ProtectedUser creteProtectedUser() {
        final ProtectedUser protectedUser = new ProtectedUser();
        final User user = getValidUser();
        protectedUser.setUser(user);
        protectedUser.setUsernameCheck(Boolean.TRUE);
        protectedUser.setEmailCheck(Boolean.TRUE);
        protectedUser.setFirstNameCheck(Boolean.TRUE);
        protectedUser.setLastNameCheck(Boolean.TRUE);
        protectedUser.setPhoneCheck(Boolean.TRUE);
        protectedUser.setPostcodeCheck(Boolean.TRUE);
        return protectedUser;
    }

    private User getValidUser() {
        final User user = new User();
        user.setUsername("aanastasov");
        user.setPassword("testpasword");
        user.setEmail("test@email.com");
        user.setId(4L);
        return user;
    }
}
