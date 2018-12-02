package student.manchester.model.card.dto;

import student.manchester.model.bind.dto.ProtectedBindDTO;
import student.manchester.model.card.Card;
import student.manchester.model.user.dto.ProtectedUserDTO;

import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class CardDTO {

    private Long id;
    private String name;
    private ProtectedUserDTO user;
    private Collection<ProtectedBindDTO> protectedBinds = new ArrayList<>();

    public CardDTO() {
        // default Ctor
    }

    public CardDTO(final Card card) {
        this.id = card.getId();
        this.name = card.getName();
        this.user = new ProtectedUserDTO(card.getUser());
        this.user.getBinds().clear();
        this.protectedBinds = card.getProtectedBinds()
                .stream()
                .map(ProtectedBindDTO::new)
                .collect(Collectors.toList());
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

    public ProtectedUserDTO getUser() {
        return user;
    }

    public void setUser(final ProtectedUserDTO user) {
        this.user = user;
    }

    public Collection<ProtectedBindDTO> getProtectedBinds() {
        return protectedBinds;
    }

    public void setProtectedBinds(final Collection<ProtectedBindDTO> protectedBinds) {
        this.protectedBinds = protectedBinds;
    }
}
