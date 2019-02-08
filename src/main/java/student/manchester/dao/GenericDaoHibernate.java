package student.manchester.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.Arrays;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.proxy.HibernateProxy;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Root;

/**
 * Hibernate implementation of {@link GenericDao}.
 */
public abstract class GenericDaoHibernate<T, ID extends Serializable>
		implements GenericDao<T, ID> {

	@Autowired
	private SessionFactory sessionFactory;

	private Class<T> entityClass;
	
	@SuppressWarnings("unchecked")
	public GenericDaoHibernate() {
	    ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
	    entityClass = (Class<T>) genericSuperclass.getActualTypeArguments()[0];
	}
	
	/**
	 * @return Obtain a Hibernate Session
	 */
	protected Session getSession() {
		return sessionFactory.getCurrentSession();
	}

	protected CriteriaBuilder getCriteriaBuilder() { return getSession().getCriteriaBuilder(); }

	protected CriteriaQuery<T> createQuery() {
		return getCriteriaBuilder().createQuery(entityClass);
	}

	protected List<T> getList(final CriteriaQuery<T> criteria) {
		return getSession().createQuery(criteria).list();
	}

    protected T getOne(final CriteriaQuery<T> criteria) {
        return getSession().createQuery(criteria).uniqueResult();
    }

	protected Path<T> getAssociation(final Root<T> table, final String path) {
		final List<String> paths = Arrays.asList(path.split("\\."));
		Path association = table;
		for(final String property : paths) {
			association = association.get(property);
		}
		return association;
	}
	
	@Override
	public Serializable save(T entity) {
		return getSession().save(entity);
	}
	
	@Override
	public void saveOrUpdate(T entity) {
		getSession().saveOrUpdate(entity);
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public T load(ID id) {
		return (T) getSession().load(entityClass, id);
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public T get(ID id) {
		return (T) getSession().get(entityClass, id);
	}
	
	@Override
	public void delete(T entity) {
		getSession().delete(entity);
	}
	
	@Override
	@SuppressWarnings("unchecked")
	public <E> E unwrap(E entity) {
		if (entity instanceof HibernateProxy) {
			return (E) ((HibernateProxy) entity).getHibernateLazyInitializer().getImplementation();
		}
		return entity;
	}
}
