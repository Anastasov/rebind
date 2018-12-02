package student.manchester.api.card.bean;

import student.manchester.model.bind.dto.ProtectedBindDTO;
import student.manchester.model.user.dto.ProtectedUserField;

import java.util.HashSet;
import java.util.Set;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class CardUpdateRequest {

    private Long id;
    private String name;

    // ProtectedUser
    private ProtectedUserField usernameField;
    private ProtectedUserField emailField;
    private ProtectedUserField firstNameField;
    private ProtectedUserField lastNameField;
    private ProtectedUserField phoneField;
    private ProtectedUserField postcodeField;

    // ProtectedBinds
    private Set<ProtectedBindDTO> binds = new HashSet<>();

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

    public Set<ProtectedBindDTO> getBinds() {
        return binds;
    }

    public void setBinds(final Set<ProtectedBindDTO> binds) {
        this.binds = binds;
    }

    public ProtectedUserField getUsernameField() {
        return usernameField;
    }

    public void setUsernameField(final ProtectedUserField usernameField) {
        this.usernameField = usernameField;
    }

    public ProtectedUserField getEmailField() {
        return emailField;
    }

    public void setEmailField(final ProtectedUserField emailField) {
        this.emailField = emailField;
    }

    public ProtectedUserField getFirstNameField() {
        return firstNameField;
    }

    public void setFirstNameField(final ProtectedUserField firstNameField) {
        this.firstNameField = firstNameField;
    }

    public ProtectedUserField getLastNameField() {
        return lastNameField;
    }

    public void setLastNameField(final ProtectedUserField lastNameField) {
        this.lastNameField = lastNameField;
    }

    public ProtectedUserField getPhoneField() {
        return phoneField;
    }

    public void setPhoneField(final ProtectedUserField phoneField) {
        this.phoneField = phoneField;
    }

    public ProtectedUserField getPostcodeField() {
        return postcodeField;
    }

    public void setPostcodeField(final ProtectedUserField postcodeField) {
        this.postcodeField = postcodeField;
    }
}
