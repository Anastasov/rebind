package student.manchester.service.auth;

import java.util.Optional;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
public interface AuthenticationService {

    Optional<String> generateTokenForUser(Long user);

    Optional<String> regenerateTokenForCurrentUser();

    void authenticateUserById(Long id);
}
