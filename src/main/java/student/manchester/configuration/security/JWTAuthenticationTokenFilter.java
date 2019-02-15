package student.manchester.configuration.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.util.StringUtils;
import student.manchester.configuration.security.exception.InvalidTokenException;
import student.manchester.configuration.security.wrapper.JWTAuthenticationToken;
import student.manchester.util.AuthUtil;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.function.Predicate;
import java.util.stream.Stream;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class JWTAuthenticationTokenFilter extends AbstractAuthenticationProcessingFilter {

    public static final String TOKEN_PREFIX = "Bearer";
    public static final String TOKEN_SEPARATOR = " ";
    public static final String TOKEN_HEADER = "Authorization";
    public static final String TOKEN_COOKIE_NAME = "rebind.authentication.jwToken";

    // Executed for every URI
    public JWTAuthenticationTokenFilter() {
        super("/**");
    }

    @Override
    public Authentication attemptAuthentication(final HttpServletRequest request,
                                                final HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException {
        final String authorization = getAuthorization(request);
        validateAuthorization(authorization);
        final String token = extractTokenHash(authorization);
        final JWTAuthenticationToken authToken = new JWTAuthenticationToken(token);
        return getAuthenticationManager().authenticate(authToken);
    }

    private String getAuthorization(final HttpServletRequest request) {
        String authorization = request.getHeader(TOKEN_HEADER);
        final Cookie[] cookies = request.getCookies();
        if(StringUtils.isEmpty(authorization) && cookiesNotEmpty(cookies)) {
            authorization = TOKEN_PREFIX + TOKEN_SEPARATOR + Stream.of(cookies)
                    .filter(this::nonTokenCookies)
                    .map(Cookie::getValue)
                    .reduce("", this::concat);
        }
        return authorization;
    }

    private boolean cookiesNotEmpty(final Cookie[] cookies) {
        return cookies != null && cookies.length > 0;
    }

    private boolean nonTokenCookies(final Cookie cookie) {
        return TOKEN_COOKIE_NAME.equals(cookie.getName());
    }

    private String concat(final String a, final String b) {
        return a.concat(b);
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

    /**
     * Skip {@link this#attemptAuthentication} for public endpoints
     * N.B. They ought to be populated by
     * {@link org.springframework.security.web.authentication.AnonymousAuthenticationFilter}
     *
     * @param request
     * @param response
     * @return
     */
    @Override
    protected boolean requiresAuthentication(final HttpServletRequest request, final HttpServletResponse response) {
        return !AuthUtil.isPublicRequest(request.getRequestURI());
    }
}
