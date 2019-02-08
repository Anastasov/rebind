package student.manchester.configuration.test;

import org.h2.Driver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.datasource.SimpleDriverDataSource;

import javax.sql.DataSource;

/**
 * Configuration for the database used by the application tests.
 *
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Configuration
@Profile("test")
public class TestDatabaseConfiguration {

    @Bean
    public DataSource dataSource() {
        SimpleDriverDataSource dataSource = new SimpleDriverDataSource();
        dataSource.setDriverClass(Driver.class);
        dataSource.setUrl("jdbc:h2:mem:database_user;DB_CLOSE_DELAY=-1");
        return dataSource;
    }
}
