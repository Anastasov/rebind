package student.manchester.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import student.manchester.configuration.security.wrapper.JWTUserDetails;

import java.security.Principal;
import java.util.Optional;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
public final class AuthUtil {

    private AuthUtil() {
        // hide ctor
    }

    public static Optional<JWTUserDetails> getCurrentUser() {
        final Optional<Authentication> authentication = Optional
                .ofNullable(SecurityContextHolder.getContext().getAuthentication());
        return Optional.ofNullable(authentication.isPresent() ?
                        (JWTUserDetails) authentication.get().getPrincipal() :
                        null);
    }
}
