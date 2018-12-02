CREATE TABLE REBIND_CARD (
  id            SERIAL        PRIMARY KEY   NOT NULL,
  name          varchar(150)   NOT NULL
);

CREATE TABLE REBIND_PROTECTED_USER (
  id                SERIAL         PRIMARY KEY   NOT NULL,
  usernameCheck     boolean        NOT NULL      DEFAULT TRUE,
  emailCheck        boolean        NOT NULL      DEFAULT TRUE,
  firstNameCheck    boolean        NOT NULL      DEFAULT TRUE,
  lastNameCheck     boolean        NOT NULL      DEFAULT TRUE,
  phoneCheck        boolean        NOT NULL      DEFAULT TRUE,
  postcodeCheck boolean        NOT NULL      DEFAULT TRUE,
  user_id           integer        REFERENCES REBIND_USER(id),
  card_id           integer        REFERENCES REBIND_CARD(id)
);

CREATE TABLE REBIND_PROTECTED_BIND (
  id            SERIAL         PRIMARY KEY    NOT NULL,
  bindCheck     boolean        NOT NULL      DEFAULT TRUE,
  bind_id       integer        REFERENCES REBIND_BIND(id),
  card_id       integer        REFERENCES REBIND_CARD(id)
);


