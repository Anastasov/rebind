package student.manchester.service.auth.impl;

import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.annotation.TransactionalService;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.AuthenticationService;
import student.manchester.service.auth.UserService;
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
}
