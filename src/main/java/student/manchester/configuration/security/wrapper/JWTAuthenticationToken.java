package student.manchester.configuration.security.wrapper;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class JWTAuthenticationToken extends UsernamePasswordAuthenticationToken {

    private final String token;

    public JWTAuthenticationToken(final String token) {
        super(null, null);
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}
