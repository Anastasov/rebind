package student.manchester.configuration.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import student.manchester.configuration.security.exception.InvalidTokenException;
import student.manchester.configuration.security.wrapper.JWTAuthenticationToken;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class JWTAuthenticationTokenFilter extends AbstractAuthenticationProcessingFilter {


    private static final String TOKEN_PREFIX = "Bearer";
    private static final String TOKEN_SEPARATOR = " ";
    private static final String TOKEN_HEADER = "Authorization";

    public JWTAuthenticationTokenFilter() {
        super("/api/**");
    }

    @Override
    public Authentication attemptAuthentication(final HttpServletRequest request,
                                                final HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException {
        final String authorization = request.getHeader(TOKEN_HEADER);
        validateAuthorization(authorization);

        final String token = extractTokenHash(authorization);
        final JWTAuthenticationToken authToken = new JWTAuthenticationToken(token);
        return getAuthenticationManager().authenticate(authToken);
    }

    private String extractTokenHash(final String header) {
        return header.split(TOKEN_SEPARATOR)[1];
    }

    private void validateAuthorization(final String authorisation) throws
            InvalidTokenException {
        if(authorisation == null || !authorisation.startsWith(TOKEN_PREFIX + TOKEN_SEPARATOR)) {
            throw new InvalidTokenException("Token is missing");
        }
    }

    @Override
    protected void successfulAuthentication(final HttpServletRequest request,
                                            final HttpServletResponse response,
                                            final FilterChain chain,
                                            final Authentication authResult)
            throws IOException, ServletException {
        super.successfulAuthentication(request, response, chain, authResult);
        chain.doFilter(request, response);
    }
}
