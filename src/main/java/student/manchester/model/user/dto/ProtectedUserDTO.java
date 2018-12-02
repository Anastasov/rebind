package student.manchester.model.user.dto;

import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class ProtectedUserDTO extends UserDTO {

    private Boolean usernameCheck = Boolean.TRUE;
    private Boolean emailCheck = Boolean.TRUE;
    private Boolean firstNameCheck = Boolean.TRUE;
    private Boolean lastNameCheck = Boolean.TRUE;
    private Boolean phoneCheck = Boolean.TRUE;
    private Boolean postcodeCheck = Boolean.TRUE;

    public ProtectedUserDTO() {
        //
    }

    public ProtectedUserDTO(final User userDto) {
        super(userDto);
    }

    public ProtectedUserDTO(final ProtectedUser userDto) {
        super(userDto.getUser());
        this.usernameCheck = userDto.getUsernameCheck();
        this.emailCheck = userDto.getEmailCheck();
        this.firstNameCheck = userDto.getFirstNameCheck();
        this.lastNameCheck = userDto.getLastNameCheck();
        this.phoneCheck = userDto.getPhoneCheck();
        this.postcodeCheck = userDto.getPostcodeCheck();
    }

    @Override
    public String getUsername() {
        return null;
    }

    public ProtectedUserField getUsernameField() {
        return new ProtectedUserField(super.getUsername(), this.usernameCheck);
    }

    @Override
    public String getEmail() {
        return null;
    }

    public ProtectedUserField getEmailField() {
        return new ProtectedUserField(super.getEmail(), this.emailCheck);
    }


    @Override
    public String getFirstName() {
        return null;
    }

    public ProtectedUserField getFirstNameField() {
        return new ProtectedUserField(super.getFirstName(), this.firstNameCheck);
    }

    @Override
    public String getLastName() {
        return null;
    }

    public ProtectedUserField getLastNameField() {
        return new ProtectedUserField(super.getLastName(), this.lastNameCheck);
    }

    @Override
    public String getPhone() {
        return null;
    }

    public ProtectedUserField getPhoneField() {
        return new ProtectedUserField(super.getPhone(), this.phoneCheck);
    }

    @Override
    public String getPostcode() {
        return null;
    }

    public ProtectedUserField getPostcodeField() {
        return new ProtectedUserField(super.getPostcode(), this.postcodeCheck);
    }

}
