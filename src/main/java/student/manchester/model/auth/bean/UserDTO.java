package student.manchester.model.auth.bean;

import student.manchester.model.auth.User;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
public class UserDTO {

    private Long id;

    private String username;

    private String password;

    private String email;

    private RoleDTO role;

    public UserDTO() {

    }

    public UserDTO(final User user) {
        if(user != null) {
            this.id = user.getId();
            this.username = user.getUsername();
            this.password = user.getPassword();
            this.email = user.getEmail();
            if(user.getRole() != null) {
                this.role = new RoleDTO(user.getRole());
            }
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(final String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(final String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public RoleDTO getRole() {
        return role;
    }

    public void setRole(final RoleDTO role) {
        this.role = role;
    }
}
