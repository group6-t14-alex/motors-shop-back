-- AlterTable
CREATE SEQUENCE users_id_seq;
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq'),
ALTER COLUMN "date_of_birth" SET DATA TYPE VARCHAR;
ALTER SEQUENCE users_id_seq OWNED BY "users"."id";
