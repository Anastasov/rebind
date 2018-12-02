package student.manchester.model.user.dto;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
public class ProtectedUserField {

    private String value;
    private Boolean hidden;

    public ProtectedUserField() {

    }


    public ProtectedUserField(final String value, final Boolean hidden) {
        this.value = value;
        this.hidden = hidden;
    }

    public String getValue() {
        return value;
    }

    public void setValue(final String value) {
        this.value = value;
    }

    public Boolean getHidden() {
        return hidden;
    }

    public void setHidden(final Boolean hidden) {
        this.hidden = hidden;
    }
}
