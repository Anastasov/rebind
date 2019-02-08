-- H2 Syntax
ALTER TABLE REBIND_USER ADD COLUMN first_name varchar(60);
ALTER TABLE REBIND_USER ADD COLUMN last_name varchar(60);
ALTER TABLE REBIND_USER ADD COLUMN phone varchar(14);
ALTER TABLE REBIND_USER ADD COLUMN postcode varchar(10);
ALTER TABLE REBIND_USER ADD COLUMN last_auth_logout DATE;

CREATE TABLE REBIND_BIND (
  id            SERIAL       PRIMARY KEY   NOT NULL,
  name          varchar(150)   NOT NULL,
  icon          varchar(150)   NOT NULL,
  url           varchar(150)   NOT NULL,
  user_id       integer        REFERENCES REBIND_USER(id)
);


