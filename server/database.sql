--
-- PostgreSQL database dump
--

\restrict RDIa13jUU6yqjDPNsdxD1AUcQ5zgjuiCbMnBCz1Oygb1Ht50QaWfqExeBsjvZYS

-- Dumped from database version 16.15 (Ubuntu 16.15-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.15 (Ubuntu 16.15-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY public.tenants DROP CONSTRAINT IF EXISTS tenants_room_id_fkey;
ALTER TABLE IF EXISTS ONLY public.tenants DROP CONSTRAINT IF EXISTS tenants_pg_id_fkey;
ALTER TABLE IF EXISTS ONLY public.tenants DROP CONSTRAINT IF EXISTS tenants_owner_id_fkey;
ALTER TABLE IF EXISTS ONLY public.rooms DROP CONSTRAINT IF EXISTS rooms_property_id_fkey;
ALTER TABLE IF EXISTS ONLY public.rent_transactions DROP CONSTRAINT IF EXISTS rent_transactions_tenant_id_fkey;
ALTER TABLE IF EXISTS ONLY public.pg_properties DROP CONSTRAINT IF EXISTS pg_properties_owner_id_fkey;
ALTER TABLE IF EXISTS ONLY public.complaints DROP CONSTRAINT IF EXISTS complaints_tenant_id_fkey;
ALTER TABLE IF EXISTS ONLY public.rooms DROP CONSTRAINT IF EXISTS unique_room_per_property;
ALTER TABLE IF EXISTS ONLY public.tenants DROP CONSTRAINT IF EXISTS tenants_pkey;
ALTER TABLE IF EXISTS ONLY public.tenants DROP CONSTRAINT IF EXISTS tenants_phone_key;
ALTER TABLE IF EXISTS ONLY public.tenants DROP CONSTRAINT IF EXISTS tenants_email_key;
ALTER TABLE IF EXISTS ONLY public.super_admin DROP CONSTRAINT IF EXISTS super_admin_pkey;
ALTER TABLE IF EXISTS ONLY public.super_admin DROP CONSTRAINT IF EXISTS super_admin_phone_key;
ALTER TABLE IF EXISTS ONLY public.super_admin DROP CONSTRAINT IF EXISTS super_admin_email_key;
ALTER TABLE IF EXISTS ONLY public.rooms DROP CONSTRAINT IF EXISTS rooms_pkey;
ALTER TABLE IF EXISTS ONLY public.rent_transactions DROP CONSTRAINT IF EXISTS rent_transactions_pkey;
ALTER TABLE IF EXISTS ONLY public.plan DROP CONSTRAINT IF EXISTS plan_plan_name_key;
ALTER TABLE IF EXISTS ONLY public.plan DROP CONSTRAINT IF EXISTS plan_pkey;
ALTER TABLE IF EXISTS ONLY public.pg_properties DROP CONSTRAINT IF EXISTS pg_properties_pkey;
ALTER TABLE IF EXISTS ONLY public.pg_owners DROP CONSTRAINT IF EXISTS pg_owners_pkey;
ALTER TABLE IF EXISTS ONLY public.pg_owners DROP CONSTRAINT IF EXISTS pg_owners_phone_unique;
ALTER TABLE IF EXISTS ONLY public.pg_owners DROP CONSTRAINT IF EXISTS pg_owners_email_unique;
ALTER TABLE IF EXISTS ONLY public.complaints DROP CONSTRAINT IF EXISTS complaints_pkey;
ALTER TABLE IF EXISTS public.tenants ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.super_admin ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.rooms ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.rent_transactions ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.plan ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.pg_properties ALTER COLUMN id DROP DEFAULT;
ALTER TABLE IF EXISTS public.complaints ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE IF EXISTS public.tenants_id_seq;
DROP TABLE IF EXISTS public.tenants;
DROP SEQUENCE IF EXISTS public.super_admin_id_seq;
DROP TABLE IF EXISTS public.super_admin;
DROP SEQUENCE IF EXISTS public.rooms_id_seq;
DROP TABLE IF EXISTS public.rooms;
DROP SEQUENCE IF EXISTS public.rent_transactions_id_seq;
DROP TABLE IF EXISTS public.rent_transactions;
DROP SEQUENCE IF EXISTS public.plan_id_seq;
DROP TABLE IF EXISTS public.plan;
DROP SEQUENCE IF EXISTS public.pg_properties_id_seq;
DROP TABLE IF EXISTS public.pg_properties;
DROP TABLE IF EXISTS public.pg_owners;
DROP SEQUENCE IF EXISTS public.complaints_id_seq;
DROP TABLE IF EXISTS public.complaints;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: complaints; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.complaints (
    id integer NOT NULL,
    tenant_id integer,
    pg_id integer,
    room_id integer,
    category character varying(50),
    description text,
    image character varying(100),
    status character varying(20) DEFAULT 'pending'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone
);


ALTER TABLE public.complaints OWNER TO postgres;

--
-- Name: complaints_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.complaints_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.complaints_id_seq OWNER TO postgres;

--
-- Name: complaints_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.complaints_id_seq OWNED BY public.complaints.id;


--
-- Name: pg_owners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pg_owners (
    id integer NOT NULL,
    name character varying(100) DEFAULT NULL::character varying,
    created_at timestamp without time zone,
    email character varying(50) DEFAULT NULL::character varying,
    password text,
    phone character varying(10) DEFAULT NULL::character varying,
    profile character varying(100) DEFAULT NULL::character varying,
    address text,
    state integer,
    district integer,
    pincode integer,
    updated_at timestamp without time zone,
    created_by integer,
    updated_by integer,
    status integer,
    upi_id character varying(100),
    plan_id integer DEFAULT 1
);


ALTER TABLE public.pg_owners OWNER TO postgres;

--
-- Name: pg_owners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.pg_owners ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.pg_owners_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: pg_properties; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pg_properties (
    id integer NOT NULL,
    owner_id integer,
    name character varying(50),
    location text,
    state integer,
    district integer,
    pincode integer,
    total_rooms integer,
    status integer DEFAULT 1,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone,
    created_by integer,
    updated_by integer
);


ALTER TABLE public.pg_properties OWNER TO postgres;

--
-- Name: pg_properties_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pg_properties_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pg_properties_id_seq OWNER TO postgres;

--
-- Name: pg_properties_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pg_properties_id_seq OWNED BY public.pg_properties.id;


--
-- Name: plan; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.plan (
    id integer NOT NULL,
    plan_name character varying(50) NOT NULL,
    total_property integer DEFAULT 1,
    total_rooms integer DEFAULT 50,
    total_tenant integer DEFAULT 100,
    price numeric(10,2) DEFAULT 0,
    billing_cycle character varying(20) DEFAULT 'monthly'::character varying,
    features text DEFAULT ''::text,
    status integer DEFAULT 1,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.plan OWNER TO postgres;

--
-- Name: plan_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.plan_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.plan_id_seq OWNER TO postgres;

--
-- Name: plan_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.plan_id_seq OWNED BY public.plan.id;


--
-- Name: rent_transactions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rent_transactions (
    id integer NOT NULL,
    tenant_id integer,
    pg_id integer,
    room_id integer,
    amount numeric(10,2) NOT NULL,
    payment_method character varying(50) DEFAULT 'Razorpay'::character varying,
    transaction_id character varying(100),
    razorpay_order_id character varying(100),
    razorpay_payment_id character varying(100),
    razorpay_signature character varying(255),
    status character varying(20) DEFAULT 'Success'::character varying,
    payment_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rent_transactions OWNER TO postgres;

--
-- Name: rent_transactions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rent_transactions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rent_transactions_id_seq OWNER TO postgres;

--
-- Name: rent_transactions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rent_transactions_id_seq OWNED BY public.rent_transactions.id;


--
-- Name: rooms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rooms (
    id integer NOT NULL,
    property_id integer,
    room_number character varying(20),
    type integer DEFAULT 1,
    status integer DEFAULT 1,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone,
    created_by integer,
    updated_by integer
);


ALTER TABLE public.rooms OWNER TO postgres;

--
-- Name: rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.rooms_id_seq OWNER TO postgres;

--
-- Name: rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;


--
-- Name: super_admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.super_admin (
    id integer NOT NULL,
    name character varying(255) DEFAULT 'Super Administrator'::character varying,
    email character varying(255) NOT NULL,
    password text NOT NULL,
    phone character varying(20),
    role character varying(50) DEFAULT 'super_admin'::character varying,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.super_admin OWNER TO postgres;

--
-- Name: super_admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.super_admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.super_admin_id_seq OWNER TO postgres;

--
-- Name: super_admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.super_admin_id_seq OWNED BY public.super_admin.id;


--
-- Name: tenants; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tenants (
    id integer NOT NULL,
    pg_id integer,
    room_id integer,
    owner_id integer,
    name character varying(50),
    phone character varying(20),
    email character varying(70),
    password character varying(255),
    aadhar character varying(100),
    pan character varying(100),
    parent_contact character varying(20),
    emergency_contact character varying(20),
    check_in_date date,
    checkout_date date,
    status integer DEFAULT 1,
    profile_photo character varying(100),
    rent_status character varying(20) DEFAULT 'pending'::character varying,
    monthly_rent numeric(10,2) DEFAULT 8000.00,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    gender character varying(20),
    occupation character varying(100),
    dob date,
    district integer,
    state integer,
    address text,
    pincode integer
);


ALTER TABLE public.tenants OWNER TO postgres;

--
-- Name: tenants_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tenants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tenants_id_seq OWNER TO postgres;

--
-- Name: tenants_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tenants_id_seq OWNED BY public.tenants.id;


--
-- Name: complaints id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.complaints ALTER COLUMN id SET DEFAULT nextval('public.complaints_id_seq'::regclass);


--
-- Name: pg_properties id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pg_properties ALTER COLUMN id SET DEFAULT nextval('public.pg_properties_id_seq'::regclass);


--
-- Name: plan id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plan ALTER COLUMN id SET DEFAULT nextval('public.plan_id_seq'::regclass);


--
-- Name: rent_transactions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rent_transactions ALTER COLUMN id SET DEFAULT nextval('public.rent_transactions_id_seq'::regclass);


--
-- Name: rooms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);


--
-- Name: super_admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.super_admin ALTER COLUMN id SET DEFAULT nextval('public.super_admin_id_seq'::regclass);


--
-- Name: tenants id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants ALTER COLUMN id SET DEFAULT nextval('public.tenants_id_seq'::regclass);


--
-- Data for Name: complaints; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.complaints (id, tenant_id, pg_id, room_id, category, description, image, status, created_at, updated_at) FROM stdin;
1	10	22	40	Electricity	light issue	2026179127869601313705.jpeg	pending	2026-10-06 14:54:56.015201	\N
3	10	22	40	Food	vjghj	20261791279395406406526.jpeg	pending	2026-10-06 15:06:35.413378	\N
5	12	22	45	Food	dfgdfg	20261791525542393393806.jpeg	pending	2026-10-09 11:29:02.394312	\N
\.


--
-- Data for Name: pg_owners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pg_owners (id, name, created_at, email, password, phone, profile, address, state, district, pincode, updated_at, created_by, updated_by, status, upi_id, plan_id) FROM stdin;
30	karan	2025-04-07 06:05:03	dimpalbasnal0@gmail.com	$2b$10$gQP8iuns9JphygZpyOYv/.qDBzAUdJTlCgMP6sXmkbfb8F/xrr88i	7682376782	\N	272, jh	1	3	433434	2025-05-04 06:17:55	\N	\N	1	7682344576782@upi	1
35	gaurav rawat	2025-05-01 18:25:54	gaurav@gmail.com	$2b$10$o062RWiB32A639BXptlJrOMFnyFZl8S13S/6UqL6lp94ro.9PWJnO	8723786238	20251746123954418418155.png	shakti khand 1	1	10	201014	2025-05-03 17:41:00	\N	\N	1	7682376782@upi	1
\.


--
-- Data for Name: pg_properties; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pg_properties (id, owner_id, name, location, state, district, pincode, total_rooms, status, created_at, updated_at, created_by, updated_by) FROM stdin;
22	30	Royal PG Residency	Plot 28, Sector 62, Noida	8	201	201014	25	1	2026-10-05 15:35:23.664165	\N	\N	\N
23	30	Green Oasis Luxury PG	DLF Phase 3, Gurugram	2	31	122002	30	1	2026-10-05 15:35:23.668432	\N	\N	\N
24	35	S N PG	gurugram	8	201	343423	23	1	2026-11-16 12:49:57.363649	\N	\N	\N
\.


--
-- Data for Name: plan; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.plan (id, plan_name, total_property, total_rooms, total_tenant, price, billing_cycle, features, status, created_at, updated_at) FROM stdin;
1	Starter / Basic	1	50	100	999.00	monthly	Single Property, Max 50 Rooms, Rent Tracking, Complaint Management	1	2026-10-12 15:42:02.457516	2026-10-12 15:42:02.457516
2	Standard / Silver	3	150	300	2499.00	monthly	Up to 3 Properties, 150 Rooms, Razorpay & Dynamic UPI QR, Multi-staff	1	2026-10-12 15:42:02.457516	2026-10-12 15:42:02.457516
3	Premium / Gold	6	400	800	4999.00	monthly	Up to 6 Properties, 400 Rooms, WhatsApp Alerts, Advanced Analytics, Export Reports	1	2026-10-12 15:42:02.457516	2026-10-12 15:42:02.457516
4	Enterprise / Diamond	15	1000	2500	9999.00	monthly	Up to 15 Properties, 1000 Rooms, Dedicated Support, Priority Resolution, Custom Branding	1	2026-10-12 15:42:02.457516	2026-10-12 15:42:02.457516
\.


--
-- Data for Name: rent_transactions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rent_transactions (id, tenant_id, pg_id, room_id, amount, payment_method, transaction_id, razorpay_order_id, razorpay_payment_id, razorpay_signature, status, payment_date) FROM stdin;
\.


--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.rooms (id, property_id, room_number, type, status, created_at, updated_at, created_by, updated_by) FROM stdin;
43	23	201	2	1	2026-10-05 15:35:23.670378	\N	\N	\N
44	23	202	2	1	2026-10-05 15:35:23.670378	\N	\N	\N
45	22	101	3	1	2026-10-09 11:25:13.835393	\N	\N	\N
46	22	102	3	1	2026-10-09 11:25:25.671428	\N	\N	\N
47	24	211	3	1	2026-11-16 12:50:14.169891	\N	\N	\N
48	24	212	1	1	2026-11-16 12:50:30.295776	\N	\N	\N
\.


--
-- Data for Name: super_admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.super_admin (id, name, email, password, phone, role, created_at, updated_at) FROM stdin;
1	Super Admin	superadmin@gmail.com	$2b$10$JD4fJnu50eSAmdwb79shm.9Mzkz83ptMin5u5P90179EtNOMzZP0S	9999999999	super_admin	2026-10-12 15:42:02.457516	2026-10-12 15:42:02.457516
\.


--
-- Data for Name: tenants; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tenants (id, pg_id, room_id, owner_id, name, phone, email, password, aadhar, pan, parent_contact, emergency_contact, check_in_date, checkout_date, status, profile_photo, rent_status, monthly_rent, created_at, gender, occupation, dob, district, state, address, pincode) FROM stdin;
10	22	\N	30	Kiran Basnal	2358565443	dimpalbasnal0@gmail.com	$2b$10$1Piw/XZiRFiAskKK5ZyfHuurzbD5SPZUuJ7ep7LI1ZMDHhQTD0YgK	20261791277001499499992.jpeg	20261791277001499499540.jpeg	5755463552	6552856545	2026-11-11	\N	1	20261791277001499499410.jpeg	pending	8000.00	2026-10-06 14:26:41.566616	female	Emplyee	2003-10-12	708	27	Nail Almora	263665
12	22	45	30	Kiran Basnal	2755259749	dimpalba5snal0@gmail.com	$2b$10$MUDIyvmUSx0Xy9DbL8mYf.f2rLK8oNmWQt9uVnLQ6/bGN3bC9vqtO	20261791525483984984801.jpeg	20261791525483984984299.jpeg	5226218567	8243322653	2026-12-09	\N	1	20261791525483984984238.jpeg	pending	8000.00	2026-10-09 11:28:04.05294	female	Employee	2003-10-12	708	27	Nail , Chokot Syaldey Almora Uttarakhand	263665
14	24	48	35	kiran basnal	9676573432	dimpal3basnal0@gmail.com	$2b$10$Ppj7eBSlvmtHpfEEcdDRled73YWxFUgmxB3LzJUHtHp2Xlytsu8Ri	20261794813782618618637.jpeg	202617948137826186185.jpeg	3453454564	4567894545	2026-11-15	\N	1	20261794813782618618300.jpeg	pending	8000.00	2026-11-16 12:53:02.712519	female	Employee	2026-10-31	708	27	Almora , Uttarakhand	263665
\.


--
-- Name: complaints_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.complaints_id_seq', 5, true);


--
-- Name: pg_owners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pg_owners_id_seq', 1, false);


--
-- Name: pg_properties_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pg_properties_id_seq', 24, true);


--
-- Name: plan_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.plan_id_seq', 4, true);


--
-- Name: rent_transactions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rent_transactions_id_seq', 8, true);


--
-- Name: rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rooms_id_seq', 48, true);


--
-- Name: super_admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.super_admin_id_seq', 1, true);


--
-- Name: tenants_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tenants_id_seq', 14, true);


--
-- Name: complaints complaints_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.complaints
    ADD CONSTRAINT complaints_pkey PRIMARY KEY (id);


--
-- Name: pg_owners pg_owners_email_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pg_owners
    ADD CONSTRAINT pg_owners_email_unique UNIQUE (email);


--
-- Name: pg_owners pg_owners_phone_unique; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pg_owners
    ADD CONSTRAINT pg_owners_phone_unique UNIQUE (phone);


--
-- Name: pg_owners pg_owners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pg_owners
    ADD CONSTRAINT pg_owners_pkey PRIMARY KEY (id);


--
-- Name: pg_properties pg_properties_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pg_properties
    ADD CONSTRAINT pg_properties_pkey PRIMARY KEY (id);


--
-- Name: plan plan_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plan
    ADD CONSTRAINT plan_pkey PRIMARY KEY (id);


--
-- Name: plan plan_plan_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.plan
    ADD CONSTRAINT plan_plan_name_key UNIQUE (plan_name);


--
-- Name: rent_transactions rent_transactions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rent_transactions
    ADD CONSTRAINT rent_transactions_pkey PRIMARY KEY (id);


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);


--
-- Name: super_admin super_admin_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.super_admin
    ADD CONSTRAINT super_admin_email_key UNIQUE (email);


--
-- Name: super_admin super_admin_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.super_admin
    ADD CONSTRAINT super_admin_phone_key UNIQUE (phone);


--
-- Name: super_admin super_admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.super_admin
    ADD CONSTRAINT super_admin_pkey PRIMARY KEY (id);


--
-- Name: tenants tenants_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_email_key UNIQUE (email);


--
-- Name: tenants tenants_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_phone_key UNIQUE (phone);


--
-- Name: tenants tenants_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_pkey PRIMARY KEY (id);


--
-- Name: rooms unique_room_per_property; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT unique_room_per_property UNIQUE (property_id, room_number);


--
-- Name: complaints complaints_tenant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.complaints
    ADD CONSTRAINT complaints_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE;


--
-- Name: pg_properties pg_properties_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pg_properties
    ADD CONSTRAINT pg_properties_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.pg_owners(id) ON DELETE CASCADE;


--
-- Name: rent_transactions rent_transactions_tenant_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rent_transactions
    ADD CONSTRAINT rent_transactions_tenant_id_fkey FOREIGN KEY (tenant_id) REFERENCES public.tenants(id) ON DELETE CASCADE;


--
-- Name: rooms rooms_property_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_property_id_fkey FOREIGN KEY (property_id) REFERENCES public.pg_properties(id) ON DELETE CASCADE;


--
-- Name: tenants tenants_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public.pg_owners(id) ON DELETE CASCADE;


--
-- Name: tenants tenants_pg_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_pg_id_fkey FOREIGN KEY (pg_id) REFERENCES public.pg_properties(id) ON DELETE CASCADE;


--
-- Name: tenants tenants_room_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tenants
    ADD CONSTRAINT tenants_room_id_fkey FOREIGN KEY (room_id) REFERENCES public.rooms(id) ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict RDIa13jUU6yqjDPNsdxD1AUcQ5zgjuiCbMnBCz1Oygb1Ht50QaWfqExeBsjvZYS

