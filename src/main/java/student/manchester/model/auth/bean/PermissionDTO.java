package student.manchester.model.auth.bean;

import student.manchester.model.auth.Permission;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class PermissionDTO {

    private Long id;

    private String name;

    private Set<RoleDTO> roles = new HashSet<>();

    public PermissionDTO() {
        // bean
    }

    public PermissionDTO(final Permission entity) {
        if(entity != null) {
            this.id = entity.getId();
            this.name = entity.getName();
            this.roles = entity.getRoles() == null
                    ? new HashSet<>()
                    : entity.getRoles().stream()
                            .map(RoleDTO::new)
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

    public Set<RoleDTO> getRoles() {
        return roles;
    }

    public void setRoles(final Set<RoleDTO> roles) {
        this.roles = roles;
    }
}
