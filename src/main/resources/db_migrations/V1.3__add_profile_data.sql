ALTER TABLE REBIND_USER
  ADD COLUMN first_name varchar(60),
  ADD COLUMN last_name varchar(60),
  ADD COLUMN phone varchar(14),
  ADD COLUMN postcode varchar(10),
  ADD COLUMN last_auth_logout DATE;

CREATE TABLE REBIND_BIND (
  id            integer        PRIMARY KEY   NOT NULL,
  name          varchar(150)   NOT NULL,
  icon          varchar(150)   NOT NULL,
  url           varchar(150)   NOT NULL,
  user_id       integer        REFERENCES REBIND_USER(id)
);


