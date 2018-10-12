package student.manchester.configuration;

import student.manchester.configuration.constants.HibernateDialect;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AvailableSettings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.Properties;

/**
 *
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Configuration
@EnableTransactionManagement
@DependsOn({"dataSource", "flyway"})
public class HibernateConfiguration {

    private static final String DIALECT = HibernateDialect.PostgresSQL9.dialect;
    private static final String ENTITIES_BASE_PACKAGE = "student.manchester.model";

    @Autowired
    private DataSource dataSource;

    @Bean
    public PlatformTransactionManager hibernateTransactionManager() throws IOException {
        HibernateTransactionManager manager = new HibernateTransactionManager();
        manager.setSessionFactory(sessionFactory());
        return manager;
    }

    @Bean
    public SessionFactory sessionFactory() throws IOException {
        LocalSessionFactoryBean factoryBean = new LocalSessionFactoryBean();
        factoryBean.setPackagesToScan(ENTITIES_BASE_PACKAGE);
        factoryBean.setHibernateProperties(hibernateProperties());
        factoryBean.setDataSource(dataSource);
        factoryBean.afterPropertiesSet();
        return factoryBean.getObject();
    }

    private Properties hibernateProperties() {
        Properties properties = new Properties();
        properties.put(AvailableSettings.DIALECT, DIALECT);
        properties.put(AvailableSettings.SHOW_SQL, "false");
        properties.put(AvailableSettings.USE_NEW_ID_GENERATOR_MAPPINGS, false);
        return properties;
    }
}
