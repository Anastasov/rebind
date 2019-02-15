package student.manchester.configuration.security;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import student.manchester.configuration.security.wrapper.JWTAuthenticationToken;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.auth.Roles;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.JWTTokenizerService;

import java.util.List;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Component
public class JWTAuthenticationProvider extends AbstractUserDetailsAuthenticationProvider {

    @Autowired
    private JWTTokenizerService validator;

    @Override
    protected void additionalAuthenticationChecks(final UserDetails userDetails,
                                                  final UsernamePasswordAuthenticationToken authentication)
            throws AuthenticationException {
    }

    @Override
    protected UserDetails retrieveUser(final String username,
                                       final UsernamePasswordAuthenticationToken authentication)
            throws AuthenticationException {
        final JWTAuthenticationToken jwtToken = (JWTAuthenticationToken) authentication;
        final String token = jwtToken.getToken();
        final UserDTO user = validator.validate(token);
        final JWTUserDetails userDetails = mapUserDetails(token, user);
        return userDetails;
    }

    private JWTUserDetails mapUserDetails(final String token, final UserDTO user) {
        final List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList(user.getRole().getName());
        return new JWTUserDetails(user.getEmail(), user.getId(), token, grantedAuthorities);
    }

    @Override
    public boolean supports(final Class<?> authentication) {
        return JWTAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
