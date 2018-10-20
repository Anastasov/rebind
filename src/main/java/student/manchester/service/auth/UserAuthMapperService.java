package student.manchester.service.auth;

import com.github.panchitoboy.shiro.jwt.repository.UserDefault;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class UserAuthMapperService implements UserDefault {

    @Override
    public Object getPrincipal() {
        return null;
    }

    @Override
    public Object getCredentials() {
        return null;
    }
}
