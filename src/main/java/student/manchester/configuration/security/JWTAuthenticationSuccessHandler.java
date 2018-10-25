package student.manchester.configuration.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import student.manchester.service.auth.exception.LogicException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Component
public class JWTAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(final HttpServletRequest request,
                                        final HttpServletResponse response,
                                        final Authentication authentication)
            throws IOException, ServletException {
        // redirect to home page or just return requested resource
        if("/login".equals(request.getRequestURL()) || "/signUp".equals(request.getRequestURL())) {
            response.sendRedirect("/api/user/profile");
        }
    }
}
