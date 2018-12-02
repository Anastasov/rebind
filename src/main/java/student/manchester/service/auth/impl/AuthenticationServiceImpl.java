package student.manchester.service.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import student.manchester.annotation.TransactionalService;
import student.manchester.configuration.security.wrapper.JWTAuthenticationToken;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.user.dto.UserDTO;
import student.manchester.service.auth.AuthenticationService;
import student.manchester.service.user.UserService;
import student.manchester.service.exception.LogicException;
import student.manchester.util.AuthUtil;

import java.util.Optional;

/**
 * @author Anastas Anastasov
 * on 10/20/2018.
 */
@TransactionalService
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private JWTTokenizer jwtTokenizer;

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public Optional<String> generateTokenForUser(final Long userId) {
        final UserDTO latestInfo = userService.findById(userId);
        final String token = latestInfo.getId() != null ?
                jwtTokenizer.generate(latestInfo) :
                null;
        return Optional.ofNullable(token);
    }

    @Override
    public Optional<String> regenerateTokenForCurrentUser() {
        final Optional<JWTUserDetails> currentUser = AuthUtil.getCurrentUser();
        final Optional<Long> id = Optional
                .ofNullable(currentUser.isPresent() ?
                        currentUser.get().getId() :
                        null);
        return id.isPresent() ? generateTokenForUser(id.get()) : Optional.empty();
    }

    @Override
    public void authenticateUserById(final Long id) {
        final Optional<String> token = generateTokenForUser(id);
        if(!token.isPresent()) {
            throw new LogicException("Server couldn't create token for user[" + id + "]");
        }
        final JWTAuthenticationToken auth = new JWTAuthenticationToken(token.get());
        Authentication authenticatedUser = authenticationManager.authenticate(auth);
        SecurityContextHolder.getContext().setAuthentication(authenticatedUser);
    }
}
