package student.manchester.configuration.security;

import org.springframework.core.MethodParameter;
import org.springframework.http.MediaType;
import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.lang.Nullable;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;
import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Anastas Anastasov
 * on 10/22/2018.
 */
public class TokenAutoGenerationInterceptor extends RequestMappingHandlerAdapter {


    @Override
    public void postHandle(final HttpServletRequest request,
                           final HttpServletResponse response,
                           final Object handler,
                           @Nullable final ModelAndView modelAndView) throws Exception {
        int x =5;
    }
}
