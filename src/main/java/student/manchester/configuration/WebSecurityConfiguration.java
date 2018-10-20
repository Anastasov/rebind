package student.manchester.configuration;

import com.github.panchitoboy.shiro.jwt.filter.JWTOrFormAuthenticationFilter;
import com.github.panchitoboy.shiro.jwt.realm.JWTRealm;
import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
import org.apache.shiro.authz.aop.AnnotationsAuthorizingMethodInterceptor;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.util.Factory;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.ops4j.pax.shiro.cdi.interceptor.ShiroInterceptor;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import student.manchester.configuration.realm.ReBindRealm;

import javax.servlet.Filter;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
//@Configuration
@DependsOn(value = {"reBindRealm"})
public class WebSecurityConfiguration {

     private static final String LOGIN_REDIRECT_URL = "/user/login";

    @Autowired
    private ReBindRealm realm;

    @Autowired
    private JWTRealm jwtRealm;

    @Bean
    public ShiroFilterFactoryBean shiroFilter() {
        ShiroFilterFactoryBean shiroFilter = new ShiroFilterFactoryBean();
        shiroFilter.setLoginUrl(LOGIN_REDIRECT_URL);
        shiroFilter.setSecurityManager(securityManager());
        Map<String, String> filterChainDefinitionMapping = new LinkedHashMap<>();
        filterChainDefinitionMapping.put("/", "anon");
        filterChainDefinitionMapping.put("/user/logout", "logout");
        filterChainDefinitionMapping.put("/user/login", "authc");
        filterChainDefinitionMapping.put("/soap/**", "anon");
        filterChainDefinitionMapping.put("/api/*s", "anon");
        filterChainDefinitionMapping.put("/api/*s/**", "perms[all, mod]");
        filterChainDefinitionMapping.put("/**/new", "user");
        shiroFilter.setFilterChainDefinitionMap(filterChainDefinitionMapping);
        final Map<String, Filter> filters = new LinkedHashMap<>();
        filters.put("filterInternal", new JWTOrFormAuthenticationFilter());
        shiroFilter.setFilters(filters);

        return shiroFilter;
    }

    @Bean
    @DependsOn({"realm", "jWTRealm"})
    public SecurityManager securityManager() {
        final Set<Realm> realms = new HashSet<>();
        realms.add(authorizingRealm());
        realms.add(authorizingJWTRealm());
        return new DefaultWebSecurityManager(realms);
    }

    /**
     * Shiro creates it's own instance of my Realm and therefore
     * Spring has no power over it to wrap it in a proxy.
     * That's why it can't add the transactional behavior.
     */
    @Bean("realm")
    public Realm authorizingRealm() {
        realm.setCredentialsMatcher(new SimpleCredentialsMatcher());
        realm.setName("reBind");
        realm.setCachingEnabled(false);
        return realm;
    }

    /**
     * Shiro creates it's own instance of my Realm and therefore
     * Spring has no power over it to wrap it in a proxy.
     * That's why it can't add the transactional behavior.
     */
    @Bean("jWTRealm")
    public Realm authorizingJWTRealm() {
        jwtRealm.setCredentialsMatcher(new SimpleCredentialsMatcher());
        jwtRealm.setName("jwt");
        jwtRealm.setCachingEnabled(false);
        return realm;
    }

    @Bean
    public static DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator() {
        DefaultAdvisorAutoProxyCreator proxy = new DefaultAdvisorAutoProxyCreator();
        proxy.setProxyTargetClass(true);
        return proxy;
    }

    @Bean
    public AuthorizationAttributeSourceAdvisor authorizationAttributeSourceAdvisor() {
        AuthorizationAttributeSourceAdvisor advBean = new AuthorizationAttributeSourceAdvisor();
        advBean.setSecurityManager(securityManager());
        return advBean;
    }
}
