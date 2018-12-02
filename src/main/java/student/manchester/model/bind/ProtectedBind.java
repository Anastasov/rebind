package student.manchester.model.bind;

import student.manchester.model.card.Card;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@Entity
@Table(name="REBIND_PROTECTED_BIND")
public class ProtectedBind implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="bindCheck")
    private Boolean bindCheck = Boolean.TRUE;

    @ManyToOne
    private Bind bind;

    @ManyToOne
    private Card card;

    public Long getId() {
        return id;
    }

    public void setId(final Long id) {
        this.id = id;
    }

    public Boolean getBindCheck() {
        return bindCheck;
    }

    public void setBindCheck(final Boolean bindCheck) {
        this.bindCheck = bindCheck;
    }

    public Card getCard() {
        return card;
    }

    public void setCard(final Card card) {
        this.card = card;
    }

    public Bind getBind() {
        return bind;
    }

    public void setBind(final Bind bind) {
        this.bind = bind;
    }
}
