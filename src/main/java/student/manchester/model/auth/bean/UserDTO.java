package student.manchester.model.auth.bean;

import student.manchester.model.auth.User;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

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

    private Date lastAuthLogout;

    private String firstName;

    private String lastName;

    private String phone;

    private String postcode;

    private Set<BindDTO> binds = new HashSet<>();

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
            this.lastAuthLogout = user.getLastAuthLogout();
            this.firstName = user.getFirstName();
            this.lastName = user.getLastName();
            this.phone = user.getPhone();
            this.postcode = user.getPostcode();
            if(user.getBinds() != null && !user.getBinds().isEmpty()) {
                this.binds = user.getBinds().stream()
                        .map(BindDTO::new)
                        .collect(Collectors.toSet());
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

    public Date getLastAuthLogout() {
        return lastAuthLogout;
    }

    public void setLastAuthLogout(final Date lastAuthLogout) {
        this.lastAuthLogout = lastAuthLogout;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(final String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(final String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(final String phone) {
        this.phone = phone;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(final String postcode) {
        this.postcode = postcode;
    }

    public Set<BindDTO> getBinds() {
        return binds;
    }

    public void setBinds(final Set<BindDTO> binds) {
        this.binds = binds;
    }
}
