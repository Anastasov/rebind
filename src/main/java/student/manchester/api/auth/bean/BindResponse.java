package student.manchester.api.auth.bean;

import student.manchester.model.auth.bean.BindDTO;

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
