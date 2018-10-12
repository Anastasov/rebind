package student.manchester.configuration;

import org.flywaydb.core.Flyway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

import javax.sql.DataSource;

/**
 * Configuration for the Flyway migrations.
 *
 * Note: Check Initial DDL script is compliant with project entities.
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Configuration
@DependsOn("dataSource")
public class FlywayConfiguration {

    /* The sub-directory inside resources folder */
    private static final String PATH_TO_SCRIPTS = "db_migrations";

    @Autowired
    private DataSource dataSource;

    @Bean
    public Flyway flyway() {
        Flyway flyway = new Flyway();
        flyway.setBaselineOnMigrate(true);
        flyway.setDataSource(dataSource);
        flyway.setLocations("classpath:" + PATH_TO_SCRIPTS);
        flyway.migrate();
        return flyway;
    }
}
