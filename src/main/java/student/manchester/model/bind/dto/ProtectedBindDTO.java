package student.manchester.model.bind.dto;

import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class ProtectedBindDTO extends BindDTO {

    private Boolean bindCheck = Boolean.TRUE;

    public ProtectedBindDTO() {
        //
    }

    public ProtectedBindDTO(final Bind bind) {
        super(bind);
    }

    public ProtectedBindDTO(final ProtectedBind bind) {
        super(bind.getBind());
        this.bindCheck = bind.getBindCheck();
        setId(bind.getId());
    }

    public Boolean getBindCheck() {
        return bindCheck;
    }

    public void setBindCheck(final Boolean bindCheck) {
        this.bindCheck = bindCheck;
    }
}
