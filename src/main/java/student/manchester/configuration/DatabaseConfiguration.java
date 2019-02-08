package student.manchester.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;
import java.net.URI;

/**
 * Configuration for the database used by the application.
 *
 * Note: When environments change, make sure to check:
 *      1) Driver used to connect to database
 *      2) Driver JDBC prefix and port used in for the database URL
 *
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Configuration
public class DatabaseConfiguration {

    private static final String REQUIRED_DATABASE_DRIVER = "DATABASE_DRIVER";
    private static final String REQUIRED_DATABASE_URL = "DATABASE_URL";
    private static final String IS_DEV_ENVIRONMENT = "IS_DEV_ENVIRONMENT";

    @Bean
    @Primary
    public DataSource dataSource() {
        final DBInfo dbInfo = getDbInfo();
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(dbInfo.driver);
        dataSource.setUrl(dbInfo.url);
        dataSource.setUsername(dbInfo.username);
        dataSource.setPassword(dbInfo.password);
        return dataSource;
    }

    private DBInfo getDbInfo() {
        final String driver = System.getenv(REQUIRED_DATABASE_DRIVER);
        final URI dbUri = getUri();
        final String url = getDbUrl(dbUri);
        final String username = dbUri.getUserInfo().split(":")[0];
        final String password = dbUri.getUserInfo().split(":")[1];
        return new DBInfo(driver, url, username, password);
    }

    private URI getUri() {
        final URI dbUri;
        try {
            dbUri = new URI(System.getenv(REQUIRED_DATABASE_URL));
        } catch (final Exception ex) {
            throw new RuntimeException("Couldn't load URI for environment variable '"
                    + REQUIRED_DATABASE_URL + "'.Please check you have it set "
                    + "and have restarted booting thread on the environment you are running the app."
                    + ex);
        }
        return dbUri;
    }

    private String getDbUrl(final URI dbUri) {
        return "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath() + shouldRequireSSL();
    }

    private String shouldRequireSSL() {
        return Boolean.valueOf(System.getenv(IS_DEV_ENVIRONMENT)) ? "" : "?sslmode=require";
    }

    private class DBInfo {
        private final String driver;
        private final String url;
        private final String username;
        private final String password;

        public DBInfo(final String driver, final String url, final String username, final String password) {
            this.driver = driver;
            this.url = url;
            this.username = username;
            this.password = password;
        }
    }
}
