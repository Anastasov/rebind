package student.manchester.configuration.constants;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
public enum HibernateDialect {

    Oracle("org.hibernate.dialect.OracleDialect"),
    Oracle9i("org.hibernate.dialect.Oracle9iDialect"),
    Oracle10g("org.hibernate.dialect.Oracle10gDialect"),
    MySQL("org.hibernate.dialect.MySQLDialect"),
    MySQL_InnoDB("org.hibernate.dialect.MySQLInnoDBDialect"),
    MySQL_MyISAM("org.hibernate.dialect.MySQLMyISAMDialect"),
    DB2("org.hibernate.dialect.DB2Dialect"),
    DB2_400("org.hibernate.dialect.DB2400Dialect"),
    DB2_OS390("org.hibernate.dialect.DB2390Dialect"),
    Microsoft_SQL_Server("org.hibernate.dialect.SQLServerDialect"),
    Sybase("org.hibernate.dialect.SybaseDialect"),
    Sybase_Anywhere("org.hibernate.dialect.SybaseAnywhereDialect"),
    PostgreSQL("org.hibernate.dialect.PostgreSQLDialect"),
    PostgresSQL9("org.hibernate.dialect.PostgreSQL9Dialect"),
    SAP_DB("org.hibernate.dialect.SAPDBDialect"),
    Informix("org.hibernate.dialect.InformixDialect"),
    HypersonicSQL("org.hibernate.dialect.HSQLDialect"),
    H2("org.hibernate.dialect.H2Dialect"),
    Ingres("org.hibernate.dialect.IngresDialect"),
    Progress("org.hibernate.dialect.ProgressDialect"),
    Mckoi_SQL("org.hibernate.dialect.MckoiDialect"),
    Interbase("org.hibernate.dialect.InterbaseDialect"),
    Pointbase("org.hibernate.dialect.PointbaseDialect"),
    FrontBase("org.hibernate.dialect.FrontbaseDialect"),
    Firebird("org.hibernate.dialect.FirebirdDialect");

    public final String dialect;

    private HibernateDialect(final String dialect) {
        this.dialect = dialect;
    }
}
