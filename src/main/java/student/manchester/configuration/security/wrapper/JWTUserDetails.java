package student.manchester.configuration.security.wrapper;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class JWTUserDetails implements UserDetails {

    private final String username;
    private final Long id;
    private final String token;
    private final List<GrantedAuthority> grantedAuthorities;

    public JWTUserDetails(final String username, final Long id, final String token,
                          final List<GrantedAuthority> grantedAuthorities) {
        this.username = username;
        this.id = id;
        this.token = token;
        this.grantedAuthorities = grantedAuthorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return grantedAuthorities;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
