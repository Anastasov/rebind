package student.manchester.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import student.manchester.configuration.security.JWTAuthenthicationSuccessHandler;
import student.manchester.configuration.security.JWTAuthenticationProvider;
import student.manchester.configuration.security.JWTAuthenticationTokenFilter;

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

    @Autowired
    private AuthenticationEntryPoint authEntryPoint;

    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(Collections.singletonList(authenticationProvider));
    }

    @Bean
    public Filter authenticationTokenFilter() {
        final JWTAuthenticationTokenFilter jwtFilter = new JWTAuthenticationTokenFilter();
        jwtFilter.setAuthenticationManager(authenticationManager());
        jwtFilter.setAuthenthicationSuccessHandler(new JWTAuthenthicationSuccessHandler());
        return jwtFilter;
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        http
          .csrf().disable()
          .authorizeRequests()
                .antMatchers("**/api/**").authenticated().and()
          .exceptionHandling()
                .authenticationEntryPoint(authEntryPoint).and()
          .formLogin().and()
          .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(authenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class);
        http.headers().cacheControl();
    }
}
