package student.manchester.model.bind.dto;

import student.manchester.model.bind.Bind;

import java.io.Serializable;

/**
 * @author Anastas Anastasov
 * on 11/11/2018.
 */
public class BindDTO implements Serializable {

    private Long id;
    private String name;
    private String icon;
    private String url;

    public BindDTO() {
        // default Ctor
    }

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

    public static class Builder {
        private Long id;
        private String name;
        private String icon;
        private String url;
        public Builder setId(final Long id) {
            this.id = id;
            return this;
        }
        public Builder setName(final String name) {
            this.name = name;
            return this;
        }
        public Builder setIcon(final String icon) {
            this.icon = icon;
            return this;
        }
        public Builder setUrl(final String url) {
            this.url = url;
            return this;
        }

        public BindDTO build() {
            final BindDTO bind = new BindDTO();
            bind.setIcon(this.icon);
            bind.setId(this.id);
            bind.setName(this.name);
            bind.setUrl(this.url);
            return bind;
        }
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        final BindDTO bindDTO = (BindDTO) o;

        if (id != null ? !id.equals(bindDTO.id) : bindDTO.id != null) {
            return false;
        }
        if (name != null ? !name.equals(bindDTO.name) : bindDTO.name != null) {
            return false;
        }
        if (icon != null ? !icon.equals(bindDTO.icon) : bindDTO.icon != null) {
            return false;
        }
        return url != null ? url.equals(bindDTO.url) : bindDTO.url == null;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (icon != null ? icon.hashCode() : 0);
        result = 31 * result + (url != null ? url.hashCode() : 0);
        return result;
    }
}
