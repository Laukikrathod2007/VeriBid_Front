# VeriBid Frontend — GeM Bid Compliance Verification Platform

This repository contains the high-fidelity React frontend for the **VeriBid** compliance verification portal, designed to automate and verify Government e-Marketplace (GeM) tender bids for CPCL (Chennai Petroleum Corporation Limited) and public sector enterprises.

---

## 🚀 Tech Stack

- **Framework:** React 19 (TypeScript)
- **Bundler:** Vite v8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion v13
- **Icons:** Lucide React

---

## 🛠️ Getting Started

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Run Local Development Server
Launch the development server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser.

### 3. Build for Production
Compile a production-ready build:
```bash
npm run build
```

---

## 🔌 Connecting to the Backend

VeriBid is designed to integrate with a python/fastapi or Node.js backend compliance engine (orchestrator + PostgreSQL).

### 1. Environment Configuration
Create a `.env` file in the root of the project to define the API base URL:
```env
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### 2. Major Integration Endpoints

| Endpoint | Method | Payload | Purpose |
|---|---|---|---|
| `/tenders/upload` | `POST` | `multipart/form-data` (Tender PDF) | Ingests tender and returns Zone A/B/C compiled requirements. |
| `/bids/upload` | `POST` | `multipart/form-data` (Vendor PDFs) | Processes vendor GST, Udyam, PAN, and CA certificates. |
| `/verification/run` | `POST` | `{ bidder_id: string }` | Dispatches parallel Cashfree/Decentro API portal verification checks. |
| `/reconciliation/contradictions` | `GET` | — | Retrieves flagged conflicts (e.g., turnover discrepancy between CA and Bank certs). |
| `/audit/trail` | `GET` | — | Fetches immutable PostgreSQL audit log bundles for CAG verification. |

### 3. Example Integration Code
You can fetch and stream values directly from your environment variable endpoint:
```typescript
// src/services/api.ts
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";

export async function runComplianceCheck(bidderId: string) {
  const response = await fetch(`${API_URL}/verification/run`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bidder_id: bidderId })
  });
  return response.json();
}
```
