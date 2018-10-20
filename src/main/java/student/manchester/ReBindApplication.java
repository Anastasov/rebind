package student.manchester;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@SpringBootApplication(exclude = HibernateJpaAutoConfiguration.class)
public class ReBindApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ReBindApplication.class);
    }

    public static void main(final String[] args) {
        SpringApplication.run(ReBindApplication.class);
    }
}
