package student.manchester.dao;

import java.io.Serializable;

/**
 * DAO generic interface for all entities
 */
public interface GenericDao<T, ID extends Serializable> {
	
	/**
	 * Persist the given entity
	 * @return the generated identifier
	 * @param entity the entity to save
	 */
	Serializable save(T entity);

	/**
	 * Either persist or update the given entity
	 * @param entity the entity to save or update
	 */
	void saveOrUpdate(T entity);

	/**
	 * Return the persistent instance of the given entity class with the given identifier,
	 * assuming that the instance exists. This method might return a proxied instance that
	 * is initialized on-demand, when a non-identifier method is accessed.
	 * <br><br>
	 * You should not use this method to determine if an instance exists (use <tt>get()</tt>
	 * instead). Use this only to retrieve an instance that you assume exists, where non-existence
	 * would be an actual error.
	 *
	 * @param id a valid identifier of an existing persistent instance of the class
	 * @return the persistent instance or proxy
	 */
	T load(ID id);

	/**
	 * Return the persistent instance of the given entity class with the given identifier,
	 * or null if there is no such persistent instance. (If the instance is already associated
	 * with the session, return that instance. This method never returns an uninitialized instance.)
	 *
	 * @param id an identifier
	 * @return a persistent instance or null
	 */
	T get(ID id);

	/**
	 * Remove a persistent entity
	 * @param entity the entity to remove
	 */
	void delete(T entity);
	
	/**
	 * Returns no proxy of given entity
	 * @param entity the entity to unwrap (remove proxies)
	 * @return the unwrapped entity
	 */
	<E> E unwrap(E entity);
}