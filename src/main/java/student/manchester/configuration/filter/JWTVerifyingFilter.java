package student.manchester.configuration.filter;

import io.jsonwebtoken.Jwts;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.web.filter.AccessControlFilter;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

/**
 * @author Anastas Anastasov
 * on 10/18/2018.
 */
public class JWTVerifyingFilter extends AccessControlFilter {

    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object obj)
            throws Exception {
        boolean accessAllowed = false;
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String jwt = httpRequest.getHeader("Authorization");
        if (jwt == null || jwt.isEmpty() || !jwt.startsWith("Bearer ")) {
            return accessAllowed;
        }
        jwt = jwt.substring(jwt.indexOf(" "));
        String username = Jwts.parser()
                .setSigningKey(DatatypeConverter.parseBase64Binary("secret"))
                .parseClaimsJws(jwt)
                .getBody()
                .getSubject();
        String subjectName = (String) SecurityUtils.getSubject().getPrincipal();
        if (username.equals(subjectName)) {
            accessAllowed = true;
        }
        return accessAllowed;
    }

    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse servletResponse)
            throws Exception {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        return false;
    }

}
