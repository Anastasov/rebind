package student.manchester.configuration;

import org.apache.shiro.authc.credential.SimpleCredentialsMatcher;
import org.apache.shiro.mgt.SecurityManager;
import org.apache.shiro.realm.Realm;
import org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor;
import org.apache.shiro.spring.web.ShiroFilterFactoryBean;
import org.apache.shiro.web.mgt.DefaultWebSecurityManager;
import org.springframework.aop.framework.autoproxy.DefaultAdvisorAutoProxyCreator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Configuration
@DependsOn(value = {"reBindRealmAuthorizer"})
public class WebSecurityConfiguration {

     private static final String LOGIN_REDIRECT_URL = "/user/login";

    @Autowired
    private ReBindRealmAuthorizer realm;

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

        return shiroFilter;
    }

    @Bean
    @DependsOn("realm")
    public SecurityManager securityManager() {
        return new DefaultWebSecurityManager(authorizingRealm());
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
