package student.manchester.util;

import student.manchester.model.auth.Roles;
import student.manchester.model.auth.dto.RoleDTO;
import student.manchester.model.user.dto.UserDTO;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.stream.Stream;

/**
 * @author Anastas Anastasov
 * on 2/17/2019.
 */
public final class SecurityUtil {

    private SecurityUtil() {
        // Hide ctor
    }

    public static Function<Roles, UserDTO> roleToNewUserWithId(final Long id) {
        return role -> {
            final UserDTO user = SecurityUtil.roleToNewUser(role);
            user.setId(id);
            return user;
        };
    }

    public static UserDTO roleToNewUser(final Roles role) {
        final UserDTO user = new UserDTO();
        user.setId(5L);
        user.setEmail("test@email.com");
        user.setPassword("test-password");
        final RoleDTO roleDTO = new RoleDTO();
        roleDTO.setName(role.name());
        user.setRole(roleDTO);
        return user;
    }

    public static class RolesStreamBuilder {
        private Stream<Roles> roles;
        private RolesStreamBuilder() {
            this.roles = Stream.of(Roles.values());
        }

        private RolesStreamBuilder(final Roles... ofRoles) {
            this.roles = Stream.of(ofRoles);
        }
        public RolesStreamBuilder exclude(final Roles excludedRole) {
            roles = roles.filter(role -> !role.equals(excludedRole));
            return this;
        }
        public Stream<Roles> stream() { return roles; }

    }

    public static Stream<Roles> getAllRoles() {
        return getRoles().stream();
    }


    public static RolesStreamBuilder getRoles() {
        return new RolesStreamBuilder();
    }

    public static RolesStreamBuilder getRoles(final Roles... roles) {
        return new RolesStreamBuilder(roles);
    }
}
