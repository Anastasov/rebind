package student.manchester.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.preauth.AbstractPreAuthenticatedProcessingFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import student.manchester.configuration.security.JWTAuthenticationSuccessHandler;
import student.manchester.configuration.security.JWTAuthenticationTokenFilter;
import student.manchester.model.auth.Roles;

import javax.servlet.Filter;
import java.util.Collections;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class JWTSecurityConfiguration extends WebSecurityConfigurerAdapter {

    public static final String[] PUBLIC_ENDPOINTS = {
            "/",
            "/home",
            "/signUp",
            "/login",
            "/resources/**",
            "/error"
    };

    public static final String[] ADMIN_ENDPOINTS = {
            "/swagger*/**",
            "/v2**",
            "/actuator**"
    };

    @Autowired
    private AuthenticationEntryPoint authEntryPoint;

    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(Collections.singletonList(authenticationProvider));
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http
          .addFilterBefore(authenticationTokenFilter(), AbstractPreAuthenticatedProcessingFilter.class)
          .csrf().disable() // .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()).and()
          .formLogin().disable()
          .authorizeRequests()
                .antMatchers(PUBLIC_ENDPOINTS)
                    .permitAll()
                .antMatchers("/api/**")
                    .authenticated()
                .antMatchers(ADMIN_ENDPOINTS)
                    .hasAuthority(Roles.ADMIN.toString()).and()
          .exceptionHandling()
                .authenticationEntryPoint(authEntryPoint).and()
          .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }

    @DependsOn("authenticationManager")
    private Filter authenticationTokenFilter() {
        final JWTAuthenticationTokenFilter jwtFilter = new JWTAuthenticationTokenFilter();
        jwtFilter.setAuthenticationManager(authenticationManager());
        jwtFilter.setAuthenticationSuccessHandler(new JWTAuthenticationSuccessHandler());
        return jwtFilter;
    }
}
