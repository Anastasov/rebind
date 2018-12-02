package student.manchester.model.card;

import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.user.ProtectedUser;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Entity
@Table(name="REBIND_CARD")
public class Card implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @OneToOne(mappedBy = "card", cascade = CascadeType.ALL)
    private ProtectedUser user;

    @OneToMany(mappedBy = "card", cascade = CascadeType.ALL, orphanRemoval = true)
    private Collection<ProtectedBind> protectedBinds = new ArrayList<>();

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

    public ProtectedUser getUser() {
        return user;
    }

    public void setUser(final ProtectedUser user) {
        this.user = user;
    }

    public Collection<ProtectedBind> getProtectedBinds() {
        return protectedBinds;
    }

    public void setProtectedBinds(final Collection<ProtectedBind> protectedBinds) {
        this.protectedBinds = protectedBinds;
    }
}
