package student.manchester.configuration.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;
import student.manchester.api.auth.bean.AuthenticatedResponse;
import student.manchester.service.auth.AuthenticationService;

import java.util.Optional;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
@RestControllerAdvice
public class TokenAutoGenerationRestControllerAdvice implements ResponseBodyAdvice<Object> {

    @Autowired
    private AuthenticationService authenticationService;

    private static final String SUPPORTED_RESPONSE = ResponseEntity.class.getTypeName()
            + "<"+ AuthenticatedResponse.class.getTypeName() +">";

    @Override
    public boolean supports(final MethodParameter returnType,
                            final Class<? extends HttpMessageConverter<?>> converterType) {
        return SUPPORTED_RESPONSE.equals(returnType.getGenericParameterType().getTypeName()) ;
    }

    @Nullable
    @Override
    public AuthenticatedResponse beforeBodyWrite(final @Nullable Object body,
                                          final MethodParameter returnType,
                                          final MediaType selectedContentType,
                                          final Class<? extends HttpMessageConverter<?>> selectedConverterType,
                                          final ServerHttpRequest request,
                                          final ServerHttpResponse response) {
        AuthenticatedResponse authResponse = null;
        if(body != null && body instanceof AuthenticatedResponse) {
            authResponse = (AuthenticatedResponse) body;
            final Optional<String> token = authenticationService
                    .regenerateTokenForCurrentUser();
            token.ifPresent(authResponse::setToken);
        }
        return authResponse;
    }
}
