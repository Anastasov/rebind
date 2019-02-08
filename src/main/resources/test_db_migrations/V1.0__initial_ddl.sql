-- H2 Syntax
CREATE SCHEMA REBIND;

CREATE TABLE REBIND_ROLE (
  id            SERIAL        PRIMARY KEY   NOT NULL,
  name          varchar(70)   NOT NULL
);

CREATE TABLE REBIND_PERMISSION (
  id            SERIAL         PRIMARY KEY   NOT NULL,
  name          varchar(150)   NOT NULL
);

CREATE TABLE ROLES_PERMISSIONS (
  id            SERIAL        PRIMARY KEY   NOT NULL,
  role_id       integer       REFERENCES REBIND_ROLE(id),
  permission_id integer       REFERENCES REBIND_PERMISSION(id)
);

CREATE TABLE REBIND_USER (
  id            SERIAL         PRIMARY KEY   NOT NULL,
  username      varchar(150)   NOT NULL,
  password      varchar(150)   NOT NULL,
  email         varchar(150)   NOT NULL,
  role_id       integer        REFERENCES REBIND_ROLE(id)
)