package student.manchester.model.user;

import student.manchester.model.card.Card;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Entity
@Table(name="REBIND_PROTECTED_USER")
public class ProtectedUser implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name="usernameCheck")
    private Boolean usernameCheck;

    @Column(name="emailCheck")
    private Boolean emailCheck;

    @Column(name="firstNameCheck")
    private Boolean firstNameCheck;

    @Column(name="lastNameCheck")
    private Boolean lastNameCheck;

    @Column(name="phoneCheck")
    private Boolean phoneCheck;

    @Column(name="postcodeCheck")
    private Boolean postcodeCheck;

    @ManyToOne
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    private Card card;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(final User user) {
        this.user = user;
    }

    public Card getCard() {
        return card;
    }

    public void setCard(final Card card) {
        this.card = card;
    }

    public Boolean getUsernameCheck() {
        return usernameCheck;
    }

    public void setUsernameCheck(final Boolean usernameCheck) {
        this.usernameCheck = usernameCheck;
    }

    public Boolean getEmailCheck() {
        return emailCheck;
    }

    public void setEmailCheck(final Boolean emailCheck) {
        this.emailCheck = emailCheck;
    }

    public Boolean getFirstNameCheck() {
        return firstNameCheck;
    }

    public void setFirstNameCheck(final Boolean firstNameCheck) {
        this.firstNameCheck = firstNameCheck;
    }

    public Boolean getLastNameCheck() {
        return lastNameCheck;
    }

    public void setLastNameCheck(final Boolean lastNameCheck) {
        this.lastNameCheck = lastNameCheck;
    }

    public Boolean getPhoneCheck() {
        return phoneCheck;
    }

    public void setPhoneCheck(final Boolean phoneCheck) {
        this.phoneCheck = phoneCheck;
    }

    public Boolean getPostcodeCheck() {
        return postcodeCheck;
    }

    public void setPostcodeCheck(final Boolean postcodeCheck) {
        this.postcodeCheck = postcodeCheck;
    }
}
