-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE public.drones_id_seq;

CREATE SEQUENCE public.drones_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.stats_id_seq;

CREATE SEQUENCE public.stats_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 2147483647
	START 1
	CACHE 1
	NO CYCLE;-- public.drones definition

-- Drop table

-- DROP TABLE public.drones;

CREATE TABLE public.drones (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	"serialNumber" varchar NOT NULL,
	battery int4 NOT NULL,
	status varchar NOT NULL,
	CONSTRAINT "PK_3137fc855d37186eeccd193569f" PRIMARY KEY (id),
	CONSTRAINT "UQ_6bb8e28fb98e053a8f69a732c5b" UNIQUE ("serialNumber")
);


-- public.stats definition

-- Drop table

-- DROP TABLE public.stats;

CREATE TABLE public.stats (
	id serial4 NOT NULL,
	"name" varchar NOT NULL,
	count int4 NOT NULL,
	highlight varchar NULL,
	description varchar NULL,
	CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY (id)
);