package student.manchester.unit.service.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import student.manchester.configuration.security.exception.RejectedTokenException;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.JWTTokenizerService;
import student.manchester.service.user.UserService;

import java.util.Calendar;
import java.util.Map;

import static org.junit.Assert.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static student.manchester.service.auth.JWTTokenizerService.AUTH_DURATION_VAR_NAME;
import static student.manchester.service.auth.JWTTokenizerService.JWT_SECRET_VAR_NAME;
import static student.manchester.util.AssertUtil.assertExceptionIsNotThrown;
import static student.manchester.util.AssertUtil.assertExceptionIsThrown;

/**
 * @author Anastas Anastasov
 * on 1/30/2019.
 */
@RunWith(MockitoJUnitRunner.class)
public class JWTTokenizerServiceTest {

    private static final int EXPECTED_TOKEN_PARTS = 3;
    private static final String JWT_SECRET = System.getenv(JWT_SECRET_VAR_NAME);
    private static final String EXPIRATION_TIME = System.getenv(AUTH_DURATION_VAR_NAME);
    private static final String DEFAULT_EXPIRATION_TIME = "0s";

    @Mock
    private static UserService userService;

    @Spy
    private static JWTTokenizerService modifiedExpirationTokenizer;

    @InjectMocks
    private static JWTTokenizerService jwtTokenizer = new JWTTokenizerService();

    @Test
    public void validateTest() {
        final UserDTO user = createUserDTO();
        final String token = jwtTokenizer.generate(user);
        when(userService.findById(user.getId())).thenReturn(user);

        // Happy paths ------------------------------------------------
        assertExceptionIsNotThrown(() -> jwtTokenizer.validate(token));

        // check with user, who requested logout
        user.setLastAuthLogout(Calendar.getInstance().getTime());
        assertExceptionIsThrown(() -> jwtTokenizer.validate(token), RejectedTokenException.class);

        // check with user not in database
        when(userService.findById(any())).thenReturn(null);
        assertExceptionIsThrown(() -> jwtTokenizer.validate(token), RejectedTokenException.class);

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> jwtTokenizer.validate(null), RejectedTokenException.class);
        assertExceptionIsThrown(() -> jwtTokenizer.validate(""), RejectedTokenException.class);
        assertExceptionIsThrown(() -> jwtTokenizer.validate("0123901231.sadad.sdad"),
                RejectedTokenException.class);
    }

    @Test
    public void validateExpirationTest() throws InterruptedException {
        final UserDTO user = createUserDTO();
        when(userService.findById(user.getId())).thenReturn(user);

        // make tokenizer issue tokens valid for only 1 second
        when(modifiedExpirationTokenizer.getTokenExpirationTime()).thenReturn("1s");
        final String expiredToken = modifiedExpirationTokenizer.generate(user);

        // assure token is expired
        Thread.sleep(1000);
        assertExceptionIsThrown(() -> jwtTokenizer.validate(expiredToken));

        // make tokenizer issue tokens valid for only 1 second
        when(modifiedExpirationTokenizer.getTokenExpirationTime()).thenReturn("5m");
        final String token = modifiedExpirationTokenizer.generate(user);

        // assure some time elapses, but token hasn't expired
        Thread.sleep(1000);
        assertExceptionIsNotThrown(() -> jwtTokenizer.validate(token));
    }

    @Test
    public void getExpirationTimeTest() {
        final String expirationTime = jwtTokenizer.getTokenExpirationTime();
        assertTrue("Expiration time for token is not as expected.",
                expirationTime.equals(EXPIRATION_TIME) || expirationTime.equals(DEFAULT_EXPIRATION_TIME));
    }

    @Test
    public void getIdFromTokenTest() {
        // Happy paths ------------------------------------------------
        final UserDTO user = createUserDTO();
        final String token = jwtTokenizer.generate(user);
        final Long id = jwtTokenizer.getIdFromToken(token);
        assertTrue("Expected token to contain jit " + user.getId() + ", but it was actually " + id,
                user.getId().equals(id));
    }

    @Test
    public void generateTokenTest() {
        // Happy paths ------------------------------------------------
        final UserDTO user = createUserDTO();
        final String token = jwtTokenizer.generate(user);

        // check correct number of token parts
        final int dotSeparatedParts = token.split("\\.").length;
        assertTrue("Incorrect number of token parts. Expected "
                        + EXPECTED_TOKEN_PARTS + ", but got " + dotSeparatedParts,
                dotSeparatedParts == EXPECTED_TOKEN_PARTS);

        final Claims tokenBody = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();
        final String tokenRole = getRoleFromToken(tokenBody);

        // check information is retained in produced token
        assertTrue("Token didn't have the same email as subject",
                user.getEmail().equals(tokenBody.getSubject()));
        assertTrue("Token didn't have the same id as user",
                user.getId().equals(Long.valueOf(tokenBody.getId())));
        assertTrue("Token didn't have the same role as user",
                user.getRole().getName().equals(tokenRole));

        // Sad paths --------------------------------------------------
        assertExceptionIsThrown(() -> jwtTokenizer.generate(null));
    }

    private String getRoleFromToken(final Claims tokenBody) {
        @SuppressWarnings("unchecked")
        final Map<String, Object> role = (Map<String, Object>) tokenBody.get("role");
        return String.valueOf(role.getOrDefault("name", ""));
    }

    private UserDTO createUserDTO() {
        final UserDTO user = new UserDTO();
        user.setEmail("naskopicha@abv.bg");
        user.setId(1L);
        final RoleDTO role = new RoleDTO();
        role.setName("Tester");
        user.setRole(role);
        return user;
    }
}
