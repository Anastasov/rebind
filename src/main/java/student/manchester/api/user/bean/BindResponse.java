package student.manchester.api.user.bean;

import student.manchester.api.common.bean.AuthenticatedResponse;
import student.manchester.model.bind.dto.BindDTO;

/**
 * @author Anastas Anastasov
 * on 11/17/2018.
 */
public class BindResponse extends AuthenticatedResponse {

    private BindDTO bind;

    public BindDTO getBind() {
        return bind;
    }

    public void setBind(final BindDTO bind) {
        this.bind = bind;
    }
}
