package student.manchester.api.auth.bean;

import java.io.Serializable;

/**
 * @author Anastas Anastasov
 * on 11/17/2018.
 */
public class BindUpdateRequest implements Serializable {

    private String selectedIcon;
    private String name;
    private String url;

    public String getSelectedIcon() {
        return selectedIcon;
    }

    public void setSelectedIcon(final String selectedIcon) {
        this.selectedIcon = selectedIcon;
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(final String url) {
        this.url = url;
    }
}
