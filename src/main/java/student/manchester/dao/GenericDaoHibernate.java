package student.manchester.dao;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.proxy.HibernateProxy;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Hibernate implementation of {@link GenericDao}.
 */
public abstract class GenericDaoHibernate<T, ID extends Serializable> implements GenericDao<T, ID> {

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
