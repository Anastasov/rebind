package student.manchester.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.AntPathMatcher;
import student.manchester.configuration.security.wrapper.JWTUserDetails;

import java.security.Principal;
import java.util.Optional;
import java.util.stream.Stream;

import static student.manchester.configuration.JWTSecurityConfiguration.PUBLIC_ENDPOINTS;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
public final class AuthUtil {

    private AuthUtil() {
        // hide ctor
    }

    public static boolean isPublicRequest(final String requestUri) {
        final AntPathMatcher matcher = new AntPathMatcher();
        return Stream.of(PUBLIC_ENDPOINTS)
                .map(uri -> matcher.match(uri, requestUri))
                // If it matches at least one
                .reduce(Boolean.FALSE,  Boolean::logicalOr);
    }

    public static Optional<JWTUserDetails> getCurrentUser() {
        final Optional<Authentication> authentication = Optional
                .ofNullable(SecurityContextHolder.getContext().getAuthentication());
        return Optional.ofNullable(authentication.isPresent() ?
                        (JWTUserDetails) authentication.get().getPrincipal() :
                        null);
    }
}
