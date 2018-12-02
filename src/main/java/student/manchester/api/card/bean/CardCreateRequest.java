package student.manchester.api.card.bean;

import student.manchester.api.auth.bean.AuthenticatedResponse;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class CardCreateRequest extends AuthenticatedResponse {

    private Long userId;
    private String name;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(final Long userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }
}
