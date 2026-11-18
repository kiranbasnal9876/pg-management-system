# PropStay — Paying Guest (PG) & Co-Living Management SaaS

A full-stack, multi-tenant property management platform engineered with **Angular 19**, **Node.js / Express 5**, and **PostgreSQL**. Built to streamline property listings, room allotment, tenant lifecycle tracking, complaints triage, and automated rent collection with dual-channel payments (Razorpay Payment Gateway & Dynamic UPI QR Codes).

---

## 🌟 Key Features & Role-Based Workflows

### 1. 🛡️ Super Administrator (Platform Owner)
- **SaaS Metric Dashboard**: Real-time overview of active/inactive clients (PG Owners), property counts, room capacity, and estimated Monthly Recurring Revenue (MRR).
- **Client Management (PG Owners)**: Provision, activate, suspend, or update PG Owner accounts.
- **Subscription Plans**: Configure SaaS subscription tiers (Basic, Silver, Gold, Diamond) with property, room, and tenant limits.

### 2. 🏢 PG Owner (Property Manager)
- **Property & Room Master**: Manage multiple properties, room inventories, room types (Single, Double, Triple sharing), and real-time occupancy.
- **Tenant Directory**: Onboard tenants, allot rooms with automatic capacity validation, record KYC documents, and track checkout dates.
- **Rent Tracking & Ledger**:
  - Filter tenants by `Paid` vs `Pending` rent status.
  - One-click WhatsApp rent payment reminder links with pre-filled room and payment details.
  - Manual cash payment toggling with automated transaction ledger entries.
- **Complaints Management**: Track, review, and update maintenance requests by status (`pending`, `in-progress`, `resolved`).
- **UPI & Payment Settings**: Configure merchant UPI ID for dynamic QR code generation.

### 3. 👤 Tenant (Resident)
- **Resident Dashboard**: Real-time view of assigned room, property details, landlord contact, and monthly rent status.
- **Dual-Channel Rent Payments**:
  - **Razorpay Online Checkout**: Instant card, net banking, or UPI gateway payment with automated receipt generation.
  - **Dynamic UPI QR Code**: Scan-and-pay via Google Pay, PhonePe, Paytm, or BHIM with pre-filled amount and transaction notes, plus UTR reference submission.
- **Automated WhatsApp Receipts**: One-click download/sharing of verified rent payment receipts.
- **Complaint Submission**: File maintenance issues across categories (Wi-Fi, Water, Food, Electricity, Other) with image attachments.

---

## 🏗️ Architecture & Technology Stack

```
+--------------------------------------------------------------+
|                    Angular 19 Frontend                       |
|   Standalone Components | Reactive Forms | RxJS Observables  |
|   Tailwind CSS & Bootstrap 5 | ApexCharts Data Viz           |
+--------------------------------------------------------------+
                               |
                               | RESTful APIs (JWT Bearer Auth)
                               v
+--------------------------------------------------------------+
|                     Node.js / Express 5                      |
|   ES Modules | Input Validation | ACID Transactions          |
|   Razorpay SDK | Dynamic QR Code Engine | JWT Auth Guard     |
+--------------------------------------------------------------+
                               |
                               | pg Connection Pool
                               v
+--------------------------------------------------------------+
|                     PostgreSQL Database                      |
|   Relational Schema | Foreign Key Cascades | Indexes         |
+--------------------------------------------------------------+
```


### Technology Breakdown
- **Frontend**: Angular 19, TypeScript, RxJS, Tailwind CSS, Bootstrap 5, Ng-ApexCharts.
- **Backend**: Node.js, Express 5 (ES Modules), `pg` (PostgreSQL client pool), `bcrypt`, `jsonwebtoken`.
- **Payment Processing**: Razorpay Orders & Webhooks, `qrcode` for deep-linked dynamic UPI payment URLs.
- **Database**: PostgreSQL 16 (Relational Schema with constraints, foreign keys, and indexes).

---

## 🔒 Security & Engineering Best Practices

1. **ACID Database Transactions**: Payment processing and tenant rent status updates execute within PostgreSQL atomic transactions (`BEGIN ... COMMIT / ROLLBACK`) to prevent race conditions and ledger discrepancies.
2. **Password Security**: Bcrypt salted hashing (`bcrypt.hash(password, 10)`) enforced across Super Admin, PG Owners, and Tenants.
3. **Role-Based Access Control (RBAC)**: Route-level protection via Angular functional guards (`dashboardAuthGuard`, `superAdminGuard`, `ownerGuard`, `tenantGuard`) and server-side JWT verification middleware.
4. **SQL Injection Mitigation**: Parameterized queries across all database operations with sanitized dynamic query filters.
5. **Horizontal Scalability Ready**: Clean separation of stateless API services and client bundle.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.x or v20.x
- **PostgreSQL**: v14+ (running on port `5432`)
- **Angular CLI**: v19.x (`npm install -g @angular/cli`)

---

### Step 1: Database Setup
1. Create a PostgreSQL database:
   ```bash
   createdb -U postgres pg_management_system
   ```
2. Import the schema and seed data:
   ```bash
   psql -U postgres -d pg_management_system -f server/database.sql
   ```

---

### Step 2: Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   npm install
   ```
2. Configure `.env` file (`server/.env`):
   ```env
   PORT=5005
   JWT_SECRET=your_jwt_secret_key
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_USER=postgres
   DB_PASS=your_postgres_password
   DB_NAME=pg_management_system
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   DEFAULT_UPI_ID=pgresidency@upi
   ```
3. Start the backend:
   ```bash
   npm run dev    # For development (nodemon)
   npm start      # For production
   ```
   The backend API will run on `http://localhost:5005`.

---

### Step 3: Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd client
   npm install
   ```
2. Start the Angular development server:
   ```bash
   npm start
   ```
3. Open your browser at `http://localhost:4200`.

---

## 📋 API Route Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/super-admin-login` | Authenticate platform administrator | No |
| `POST` | `/pg-owner-login` | Authenticate PG property owner | No |
| `POST` | `/tenant-login` | Authenticate resident / tenant | No |
| `POST` | `/super-admin-stats` | Platform-wide analytics and MRR | Super Admin |
| `POST` | `/plan-list` | List active SaaS subscription tiers | Yes |
| `POST` | `/property-table` | Filter and paginate owner properties | PG Owner |
| `POST` | `/room-table` | Filter and paginate rooms | PG Owner |
| `POST` | `/tenant-table` | Directory of tenants with occupancy filters | PG Owner |
| `POST` | `/create-razorpay-order` | Initialize Razorpay payment order | Tenant |
| `POST` | `/verify-rent-payment` | Verify HMAC signature & mark rent paid | Yes |
| `POST` | `/generate-tenant-upi-qr` | Generate dynamic UPI QR code PNG | Yes |
| `POST` | `/submit-upi-payment` | Submit UTR reference for manual verification | Yes |
| `POST` | `/tenant-complaint-table` | Paginated complaint tracking | Yes |
| `POST` | `/delete` | Multi-table cascade delete handler | Super Admin / Owner |

---

## 📄 License
ISC License.
