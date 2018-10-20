-- Firstly, remove PRIMARY KEY attribute of former PRIMARY KEY
ALTER TABLE REBIND_ROLE DROP COLUMN id CASCADE;
ALTER TABLE REBIND_ROLE ADD COLUMN id SERIAL PRIMARY KEY NOT NULL;

ALTER TABLE REBIND_PERMISSION DROP COLUMN id CASCADE;
ALTER TABLE REBIND_PERMISSION ADD COLUMN id SERIAL PRIMARY KEY NOT NULL;

ALTER TABLE ROLES_PERMISSIONS DROP COLUMN id CASCADE;
ALTER TABLE ROLES_PERMISSIONS ADD COLUMN id SERIAL PRIMARY KEY NOT NULL;

ALTER TABLE REBIND_USER DROP COLUMN id CASCADE;
ALTER TABLE REBIND_USER ADD COLUMN id SERIAL PRIMARY KEY NOT NULL;

ALTER TABLE REBIND_USER ALTER COLUMN USERNAME DROP NOT NULL;
