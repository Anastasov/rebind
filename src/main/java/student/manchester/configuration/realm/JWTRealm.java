package student.manchester.configuration.realm;

import com.github.panchitoboy.shiro.jwt.repository.UserRepository;
import org.apache.shiro.subject.PrincipalCollection;

import com.github.panchitoboy.shiro.jwt.repository.UserDefault;
import org.springframework.beans.factory.annotation.Autowired;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.SimpleAccount;
import com.github.panchitoboy.shiro.jwt.filter.JWTAuthenticationToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.authc.AuthenticationToken;

import org.springframework.stereotype.Component;
import student.manchester.service.auth.UserService;



/**
 * @author Anastas Anastasov
 * on 10/18/2018.
 */

@Component
public class JWTRealm extends AuthorizingRealm {

//    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean supports(AuthenticationToken token) {
        return token != null && token instanceof JWTAuthenticationToken;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        return new SimpleAuthorizationInfo(((UserDefault) principals.getPrimaryPrincipal()).getRoles());
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) {
        JWTAuthenticationToken upToken = (JWTAuthenticationToken) token;
        UserDefault user = userRepository.findById(upToken.getUserId());
        if (user != null && userRepository.validateToken(upToken.getToken())) {
            SimpleAccount account = new SimpleAccount(user, upToken.getToken(), getName());
            account.addRole(user.getRoles());
            return account;
        }
        return null;
    }
}
