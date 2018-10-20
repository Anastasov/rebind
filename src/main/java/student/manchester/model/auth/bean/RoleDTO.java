package student.manchester.model.auth.bean;

import student.manchester.model.auth.Role;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class RoleDTO {

    private Long id;

    private String name;

    private Set<PermissionDTO> permissions = new HashSet<>();

    public RoleDTO() {
        // bean
    }

    public RoleDTO(final Role role) {
        if(role != null) {
            this.id = role.getId();
            this.name = role.getName();
            this.permissions = role.getPermissions() == null
                    ? new HashSet<>()
                    : role.getPermissions().stream()
                            .map(PermissionDTO::new)
                            .collect(Collectors.toCollection(HashSet::new));
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public Set<PermissionDTO> getPermissions() {
        return permissions;
    }

    public void setPermissions(final Set<PermissionDTO> permissions) {
        this.permissions = permissions;
    }
}
