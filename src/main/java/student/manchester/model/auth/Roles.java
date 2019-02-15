package student.manchester.model.auth;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 *
 * Here is the chain of events:
 *
 * Unauthenthicated -------> UNCONFIRMED_USER ----------> CONFIRMED_USER --------> USER
 *                      (needs to validate e-mail)  (needs to set up username)
 */
public enum Roles {
    UNCONFIRMED_USER,
    CONFIRMED_USER,
    USER,
    ADMIN
}
