package student.manchester.model.auth;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "REBIND_PERMISSION", uniqueConstraints={@UniqueConstraint(columnNames={"name"})})
public class Permission {

	@Id
	@GeneratedValue
	private Long id;

	private String name;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "ROLES_PERMISSIONS",
			inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"),
			joinColumns = @JoinColumn(name = "permission_id", referencedColumnName = "id"))
	private Set<Role> roles;

	public Long id() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
