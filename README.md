# Anvaya CRM

Anvaya CRM is a full-stack **Customer Relationship Management (CRM)** application built with the MERN stack for managing sales leads, sales agents, lead discussions, and business reports.

The application provides JWT-based authentication, protected routes, lead CRUD operations, filtering and search, sales-agent management, lead comments, and report generation using MongoDB aggregation.

## Live Application

https://anvaya-crm-lead-management-system.vercel.app/

## GitHub Repository

https://github.com/sunny-raj-sah/-Anvaya-CRM---Lead-Management-System

---

# Project Overview

Anvaya CRM provides a centralized workflow for managing leads throughout a sales pipeline.

A lead can move through:

```text
New
 ↓
Contacted
 ↓
Qualified
 ↓
Proposal Sent
 ↓
Closed
```

The system allows users to:

* Manage sales leads
* Assign sales agents
* Track lead status
* Set lead priority
* Track lead sources
* Add tags
* Track expected time to close
* Add comments to leads
* Search and filter leads
* View lead details
* Analyze pipeline statistics
* Analyze closed leads
* View closed leads by sales agent

---

# Core Features

## Authentication

* User registration
* User login
* JWT authentication
* Password hashing with bcrypt
* Protected frontend routes
* Protected backend routes
* Current-user endpoint
* Persistent authentication using `localStorage`
* Logout
* Authentication state through React Context

## Lead Management

* Create leads
* View all leads
* View individual lead details
* Edit leads
* Delete leads
* Assign sales agents
* Set lead status
* Set lead priority
* Set lead source
* Add tags
* Track time to close
* Track closed date

## Lead Pipeline

Supported lead statuses:

```text
New
Contacted
Qualified
Proposal Sent
Closed
```

## Lead Filtering

Leads can be filtered by:

* Status
* Priority
* Source
* Sales agent
* Search term

Search can match:

* Lead name
* Source
* Status
* Priority
* Sales-agent name

## Sales Agents

* View agents
* Create agents
* Delete agents
* Assign agents to leads

## Comments

Each lead can have discussion comments.

Supported operations:

* View comments
* Add comments
* Delete comments
* Display comment author
* Display timestamps

Comments are associated with authenticated application users.

## Reports

The Reports section provides:

* Pipeline by status
* Leads closed during the last seven days
* Closed leads grouped by sales agent

Charts are rendered using Chart.js.

---

# Tech Stack

## Frontend

* React 19
* Vite
* React Router
* Context API
* `useReducer`
* Axios
* React Hook Form
* React Select
* Bootstrap 5
* React-Bootstrap
* Chart.js
* React Chart.js 2
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* CORS
* Morgan
* dotenv
* express-async-handler
* validator

## Development

* VS Code
* Git
* GitHub
* Postman
* MongoDB Compass

---

# Architecture

```text
                         ┌──────────────────────┐
                         │      React App       │
                         │                      │
                         │ Pages / Components   │
                         │ Context / Reducers   │
                         └──────────┬───────────┘
                                    │
                                    │ Axios
                                    │ REST API
                                    ▼
                         ┌──────────────────────┐
                         │    Express Server    │
                         │                      │
                         │ Routes               │
                         │ Middleware           │
                         │ Controllers          │
                         │ Services             │
                         └──────────┬───────────┘
                                    │
                                    │ Mongoose
                                    ▼
                         ┌──────────────────────┐
                         │       MongoDB        │
                         │                      │
                         │ Users                │
                         │ Leads                │
                         │ Agents               │
                         │ Comments             │
                         └──────────────────────┘
```

The backend separates HTTP routing, authentication middleware, business logic, and database models.

```text
Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Services
  ↓
Models
  ↓
MongoDB
```

---

# Project Structure

```text
Anvaya-CRM/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── leads/
│   │   │   └── ...
│   │   │
│   │   ├── constants/
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── AgentContext.jsx
│   │   │   ├── AppProvider.jsx
│   │   │   ├── CommentContext.jsx
│   │   │   ├── LeadContext.jsx
│   │   │   └── ReportContext.jsx
│   │   │
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   ├── Dashboard/
│   │   │   ├── Leads/
│   │   │   ├── Agents/
│   │   │   ├── Reports/
│   │   │   ├── LeadViews/
│   │   │   └── Settings/
│   │   │
│   │   ├── reducers/
│   │   │   ├── agentReducer.js
│   │   │   ├── commentReducer.js
│   │   │   ├── leadReducer.js
│   │   │   └── reportReducer.js
│   │   │
│   │   ├── routes/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── seed/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md
```

---

# Authentication Architecture

Anvaya CRM uses JWT-based authentication.

The authentication lifecycle is:

```text
                 User
                  │
          ┌───────┴────────┐
          │                │
       Register           Login
          │                │
          ▼                ▼
      Validate         Find User
          │                │
          ▼                ▼
    bcrypt.hash()    bcrypt.compare()
          │                │
          └───────┬────────┘
                  ▼
             Generate JWT
                  │
                  ▼
             React Client
                  │
                  ▼
             localStorage
```

Passwords are hashed before being stored.

The JWT contains the authenticated user's ID:

```js
{
  userId
}
```

The current implementation configures the token to expire after **one day**.

---

# Password Security

During registration:

```text
Plain Password
      │
      ▼
bcrypt.hash(password, 10)
      │
      ▼
Hashed Password
      │
      ▼
MongoDB
```

During login:

```text
Entered Password
      │
      ▼
bcrypt.compare()
      │
      ▼
Stored Password Hash
```

The backend never needs to compare plain-text passwords against stored values.

---

# JWT Middleware

Protected backend routes require:

```http
Authorization: Bearer <token>
```

The middleware:

1. Reads the authorization header.
2. Checks that it uses the Bearer format.
3. Extracts the token.
4. Verifies the token using `JWT_SECRET`.
5. Places the decoded user information on `req.user`.
6. Passes the request to the next middleware/controller.

```text
Request
   │
   ▼
Authorization Header
   │
   ▼
JWT Middleware
   │
   ├── Missing token → 401
   │
   ├── Invalid/expired → 401
   │
   └── Valid token
          │
          ▼
      Controller
```

---

# Frontend Authentication

Authentication state is handled through:

```text
AuthContext
```

The context manages:

```text
user
token
loading
error
```

It exposes:

```text
login()
register()
logout()
getCurrentUser()
```

The token is stored in:

```text
localStorage
```

using:

```text
token
```

as the storage key.

---

# Authentication Initialization

When the React application starts:

```text
React Application
       │
       ▼
AuthContext
       │
       ▼
localStorage.getItem("token")
       │
       ├── No token
       │      ↓
       │   Unauthenticated
       │
       └── Token exists
              │
              ▼
          GET /api/auth/me
              │
              ▼
          Load user
```

If the token is invalid or expired, the client removes it from `localStorage`.

---

# Protected Frontend Routes

The application uses `ProtectedRoute` to protect CRM pages.

Public routes:

```text
/login
/register
```

Protected routes include:

```text
/
/leads
/leads/new
/leads/:id
/leads/edit/:id
/leads/status
/agents
/agents/new
/reports
/agent/status
/settings
```

The protected route is combined with `DashboardLayout`.

```text
ProtectedRoute
      │
      ▼
DashboardLayout
      │
      ├── Dashboard
      ├── Leads
      ├── Agents
      ├── Reports
      └── Settings
```

---

# Lead Lifecycle

The CRM uses a defined sales pipeline:

```text
┌─────┐
│ New │
└──┬──┘
   │
   ▼
┌───────────┐
│ Contacted │
└─────┬─────┘
      │
      ▼
┌───────────┐
│ Qualified │
└─────┬─────┘
      │
      ▼
┌──────────────┐
│ Proposal Sent│
└──────┬───────┘
       │
       ▼
┌────────┐
│ Closed │
└────────┘
```

This gives sales teams a structured way to understand where each lead is in the sales process.

---

# Lead Data Model

The Lead model contains:

```text
Lead
├── name
├── source
├── salesAgent
├── status
├── priority
├── timeToClose
├── tags[]
├── closedAt
├── createdAt
└── updatedAt
```

### Source

Supported sources include:

```text
Website
Referral
Cold Call
LinkedIn
Facebook
Instagram
Email Campaign
Trade Show
```

### Priority

```text
High
Medium
Low
```

### Status

```text
New
Contacted
Qualified
Proposal Sent
Closed
```

---

# Sales Agent Model

Each sales agent contains:

```text
Agent
├── name
├── email
├── phone
├── createdAt
└── updatedAt
```

The email field is unique.

Leads reference agents using MongoDB ObjectIds:

```text
Lead
  │
  └── salesAgent → Agent
```

The backend uses Mongoose `populate()` to return the associated agent data.

---

# Comment Model

Comments belong to a lead.

The current model supports two author references:

```text
Comment
├── lead
├── author
├── authorUser
├── commentText
├── createdAt
└── updatedAt
```

The active comment flow associates newly created comments with the authenticated application user through:

```text
req.user.userId
```

The response populates both:

```text
author
authorUser
```

when applicable.

---

# Lead Filtering

The lead endpoint supports:

```text
status
priority
source
salesAgent
search
```

Example:

```http
GET /api/leads?status=Qualified
```

Multiple filters can be combined:

```http
GET /api/leads?status=Qualified&priority=High
```

---

# Search Architecture

Search is implemented in the backend service layer.

When a search term is supplied, the backend:

1. Searches sales agents by name.
2. Extracts matching agent IDs.
3. Builds a MongoDB `$or` query.
4. Searches across lead fields and matching agent IDs.

Conceptually:

```text
Search Term
     │
     ├───────────────┐
     │               │
     ▼               ▼
Lead fields      Agent names
     │               │
     │          Matching IDs
     │               │
     └───────┬───────┘
             ▼
          $or Query
             │
             ▼
          MongoDB
```

Search can therefore find a lead through its own fields or through the assigned sales-agent name.

---

# Service Layer

One of the important architectural decisions is separating business/data operations from controllers.

For example:

```text
leadRoutes.js
      │
      ▼
leadController.js
      │
      ▼
leadService.js
      │
      ▼
Lead.js
      │
      ▼
MongoDB
```

The controller is responsible for the HTTP request/response.

The service is responsible for database operations.

This separation improves maintainability compared with placing all database logic directly inside route handlers.

---

# Lead CRUD APIs

## Get Leads

```http
GET /api/leads
```

Supports filtering through query parameters.

## Get Lead

```http
GET /api/leads/:id
```

Returns a specific lead with its sales agent populated.

## Create Lead

```http
POST /api/leads
```

## Update Lead

```http
PUT /api/leads/:id
```

The update uses Mongoose validation.

## Delete Lead

```http
DELETE /api/leads/:id
```

---

# Agent APIs

```http
GET    /api/agents
POST   /api/agents
DELETE /api/agents/:id
```

All agent routes are protected by JWT authentication.

---

# Comment APIs

Get comments:

```http
GET /api/leads/:leadId/comments
```

Create comment:

```http
POST /api/leads/:leadId/comments
```

Delete comment:

```http
DELETE /api/leads/comments/:id
```

Comments are returned in reverse chronological order.

---

# Reports Architecture

The reporting system is implemented in a dedicated service layer.

```text
Report Route
     │
     ▼
Report Controller
     │
     ▼
Report Service
     │
     ▼
MongoDB Aggregation / Query
     │
     ▼
JSON Response
     │
     ▼
Report Context
     │
     ▼
Chart.js
```

---

# Pipeline Report

Endpoint:

```http
GET /api/report/pipeline
```

The backend uses MongoDB aggregation:

```text
Lead Collection
      │
      ▼
$group by status
      │
      ▼
Count leads
      │
      ▼
Pipeline statistics
```

The resulting structure contains the status and number of leads.

Example concept:

```json
[
  {
    "status": "New",
    "count": 12
  },
  {
    "status": "Qualified",
    "count": 8
  }
]
```

---

# Closed Leads Report

Endpoint:

```http
GET /api/report/last-week
```

The backend calculates a date seven days before the current date and retrieves leads whose:

```text
status = "Closed"
```

and whose:

```text
updatedAt >= seven days ago
```

The associated sales agent is populated.

---

# Closed Leads by Agent

Endpoint:

```http
GET /api/report/closed-by-agent
```

The backend uses MongoDB aggregation:

```text
Lead
 │
 ▼
$match status = Closed
 │
 ▼
$group by salesAgent
 │
 ▼
$lookup Agent
 │
 ▼
$unwind
 │
 ▼
Return agent name + total closed
```

This provides agent-level closed-lead statistics.

---

# React State Management

The frontend uses React Context API and `useReducer`.

Different application domains have dedicated contexts:

```text
AuthContext
AgentContext
LeadContext
CommentContext
ReportContext
AppProvider
```

Reducers include:

```text
agentReducer
commentReducer
leadReducer
reportReducer
```

This separates state management by domain.

---

# URL-Based Filtering

Lead filters are synchronized with URL query parameters.

For example:

```text
/leads?status=Qualified&priority=High
```

This has several advantages:

* Filter state can survive page refreshes.
* URLs can be shared.
* Browser navigation can preserve filtering state.
* The UI state is represented by the URL.

Conceptually:

```text
Filter UI
   │
   ▼
URLSearchParams
   │
   ▼
/leads?status=Qualified
   │
   ▼
API Request
   │
   ▼
Backend Query
```

---

# Dashboard

The Dashboard provides a centralized overview of CRM activity.

The frontend contains dashboard statistics and navigation to:

* Leads
* Agents
* Reports
* Lead views
* Settings

The dashboard is part of the protected application area.

---

# Reports UI

The frontend uses Chart.js and React Chart.js 2.

The reports interface is designed around:

* Pipeline distribution
* Recently closed leads
* Agent performance

The data flow is:

```text
MongoDB
   ↓
Report Service
   ↓
Report API
   ↓
ReportContext
   ↓
React Reports Page
   ↓
Chart.js
```

---

# Frontend Architecture

```text
React Application
│
├── Pages
│
├── Components
│
├── Contexts
│
├── Reducers
│
├── Hooks
│
├── Services
│
└── Routes
```

This structure keeps UI, state, API communication, and routing responsibilities separated.

---

# Backend Architecture

```text
Express Application
│
├── Routes
│
├── Middleware
│
├── Controllers
│
├── Services
│
├── Models
│
└── Seed
```

The backend uses a layered architecture rather than placing database operations directly inside route definitions.

---

# REST API Summary

## Authentication

| Method | Endpoint             | Purpose          |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register user    |
| POST   | `/api/auth/login`    | Login            |
| GET    | `/api/auth/me`       | Get current user |

## Leads

| Method | Endpoint         | Purpose          |
| ------ | ---------------- | ---------------- |
| GET    | `/api/leads`     | Get/filter leads |
| GET    | `/api/leads/:id` | Get lead         |
| POST   | `/api/leads`     | Create lead      |
| PUT    | `/api/leads/:id` | Update lead      |
| DELETE | `/api/leads/:id` | Delete lead      |

## Agents

| Method | Endpoint          | Purpose      |
| ------ | ----------------- | ------------ |
| GET    | `/api/agents`     | Get agents   |
| POST   | `/api/agents`     | Create agent |
| DELETE | `/api/agents/:id` | Delete agent |

## Comments

| Method | Endpoint                      | Purpose        |
| ------ | ----------------------------- | -------------- |
| GET    | `/api/leads/:leadId/comments` | Get comments   |
| POST   | `/api/leads/:leadId/comments` | Add comment    |
| DELETE | `/api/leads/comments/:id`     | Delete comment |

## Reports

| Method | Endpoint                      | Purpose               |
| ------ | ----------------------------- | --------------------- |
| GET    | `/api/report/pipeline`        | Pipeline report       |
| GET    | `/api/report/last-week`       | Recently closed leads |
| GET    | `/api/report/closed-by-agent` | Closed leads by agent |

---

# Database Relationships

```text
                 ┌──────────────┐
                 │    Agent     │
                 └──────▲───────┘
                        │
                        │ salesAgent
                        │
                 ┌──────┴───────┐
                 │     Lead     │
                 └──────▲───────┘
                        │
                        │ lead
                        │
                 ┌──────┴───────┐
                 │   Comment    │
                 └──────────────┘

                 ┌──────────────┐
                 │     User     │
                 └──────▲───────┘
                        │
                        │ authorUser
                        │
                 ┌──────┴───────┐
                 │   Comment    │
                 └──────────────┘
```

---

# Seed Data

The backend includes a database seed script.

Run:

```bash
npm run seed
```

The seed data provides realistic CRM records for development and testing.

The project can therefore be populated with:

* Sales agents
* Leads
* Lead statuses
* Lead priorities
* Lead sources
* Tags
* Comments

---

# Environment Variables

Create a `.env` file inside the backend:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Never commit real credentials or secrets to GitHub.

---

# Local Development

## Clone Repository

```bash
git clone https://github.com/sunny-raj-sah/-Anvaya-CRM---Lead-Management-System.git
cd -Anvaya-CRM---Lead-Management-System
```

## Backend

```bash
cd backend
npm install
npm run dev
```

The backend starts using:

```text
src/server.js
```

## Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite will provide the local frontend URL in the terminal.

---

# Security

The current implementation includes:

* JWT authentication
* bcrypt password hashing
* Protected Express routes
* Protected React routes
* Bearer-token authentication
* Environment-based JWT secret
* Password exclusion from `/auth/me` response

The current JWT is stored in `localStorage`.

For a more hardened production authentication architecture, HTTP-only secure cookies with refresh-token rotation could be considered.

---

# Current Scope

The implemented application currently covers:

```text
Authentication
      +
Lead Management
      +
Sales Agents
      +
Comments
      +
Filtering/Search
      +
Reports
      +
Charts
```

The repository also contains a foundation for further expansion.

---

# Future Improvements

The following are future improvements rather than current implemented features:

* Role-based authorization enforcement
* Pagination
* Debounced server-side search
* Request validation improvements
* Centralized error handling
* API response caching
* Redis caching
* Automated unit tests
* Integration tests
* Docker
* CI/CD
* Advanced report optimization
* Image uploads
* Activity logs
* More granular resource authorization

---

# Engineering Decisions

## 1. Layered Backend

The backend separates:

```text
Routes
Controllers
Services
Models
```

This prevents database logic from being tightly coupled to HTTP route definitions.

## 2. Context-Based Frontend State

Context API provides shared state without introducing a large external state-management library.

## 3. useReducer

Reducers make state transitions explicit and easier to reason about for larger domains such as leads and reports.

## 4. MongoDB References

Leads reference their sales agent using MongoDB ObjectIds.

Mongoose `populate()` makes the related agent available to the frontend.

## 5. MongoDB Aggregation

Reports use MongoDB aggregation pipelines for grouping and joining lead data.

This keeps report calculations close to the database.

---

# Key Engineering Concepts

This project demonstrates:

* React
* React Hooks
* Context API
* `useReducer`
* React Router
* Protected routes
* Axios
* REST APIs
* JWT
* bcrypt
* Express middleware
* Controllers
* Service layer
* MongoDB
* Mongoose
* ObjectId references
* Mongoose `populate()`
* MongoDB aggregation
* Query filtering
* URL search parameters
* CRUD operations
* Chart.js
* Form handling
* API integration
* Environment configuration
* Full-stack deployment

---

# What I Learned

Building Anvaya CRM strengthened my understanding of how a real-world CRM workflow can be represented across the frontend, backend, and database layers.

The request lifecycle is:

```text
User Interaction
      ↓
React Component
      ↓
Context / Reducer
      ↓
Axios
      ↓
Express Route
      ↓
JWT Middleware
      ↓
Controller
      ↓
Service
      ↓
Mongoose
      ↓
MongoDB
      ↓
JSON Response
      ↓
React State
      ↓
UI Update
```

The project particularly strengthened my understanding of:

1. JWT authentication.
2. Protected routes.
3. REST API design.
4. Service-layer architecture.
5. MongoDB relationships.
6. Mongoose population.
7. MongoDB aggregation.
8. Query-based filtering.
9. URL-synchronized filters.
10. React Context and reducers.
11. Data visualization.
12. Full-stack frontend/backend integration.

---

# Author

**Sunny Raj**

Full Stack Engineer

### Technologies

`React` · `Node.js` · `Express.js` · `MongoDB` · `JWT` · `Mongoose`

---

# Links

**Live Application**

https://anvaya-crm-lead-management-system.vercel.app/

**GitHub Repository**

https://github.com/sunny-raj-sah/-Anvaya-CRM---Lead-Management-System
