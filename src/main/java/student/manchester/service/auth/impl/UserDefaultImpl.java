package student.manchester.service.auth.impl;

import com.github.panchitoboy.shiro.jwt.repository.UserDefault;
import student.manchester.model.auth.bean.UserDTO;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class UserDefaultImpl implements UserDefault {

    private final UserDTO userDTO;
    private final Set<String> roles;

    public UserDefaultImpl(final UserDTO userDTO) {
        this.userDTO = userDTO;
        this.roles = new HashSet<>();
        if(userDTO.getRole() != null) {
            this.roles.add(userDTO.getRole().getName());
        }
    }

    @Override
    public Object getPrincipal() {
        return userDTO != null ? userDTO.getEmail() : null;
    }

    @Override
    public Object getCredentials() {
        return userDTO != null ? userDTO.getPassword() : null;
    }

    @Override
    public Set<String> getRoles() {
        return roles;
    }
}
