package student.manchester.model.auth.bean;

import student.manchester.model.auth.Bind;

/**
 * @author Anastas Anastasov
 * on 11/11/2018.
 */
public class BindDTO {

    private Long id;

    private String name;

    private String icon;

    private String url;

    public BindDTO(final Bind bind) {
        this.id = bind.getId();
        this.name = bind.getName();
        this.icon = bind.getIcon();
        this.url = bind.getUrl();
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

    public String getIcon() {
        return icon;
    }

    public void setIcon(final String icon) {
        this.icon = icon;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(final String url) {
        this.url = url;
    }
}
