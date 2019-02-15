package student.manchester.api.user.bean;

import java.io.Serializable;

/**
 * @author Anastas Anastasov
 * on 11/17/2018.
 */
public class BindUpdateRequest implements Serializable {

    private String icon;
    private String name;
    private String url;

    public String getIcon() {
        return icon;
    }

    public void setIcon(final String selectedIcon) {
        this.icon = selectedIcon;
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
