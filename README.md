**Assignment 1: Secure User Profile & Access Control System**. It provides a clean setup guide for your Identity Management Microservice using **Neon PostgreSQL** and standard CSS.

# Identity Management Microservice

A secure Full Stack User Profile & Access Control System built to manage sensitive user identity data. This project implements stateless authentication and industry-standard encryption for data at rest.

## Features

- **Stateless Authentication**: Implements secure Login and Registration APIs using **JWT (JSON Web Tokens)**.
- **Field-Level Encryption**: Sensitive user data, specifically the **Aadhaar/ID Number**, is stored encrypted at rest using **AES-256-CBC**.
- **Secure Profile Access**: Authenticated API endpoint to fetch and automatically decrypt user profile data.
- **Database Integration**: Powered by **Neon PostgreSQL**, a serverless database solution.
- **Responsive UI**: A clean, centered Identity Portal built with standard CSS for maximum compatibility and performance.

## Tech Stack

- **Frontend**: React, React Router, Standard CSS (Custom Reset).
- **Backend**: Node.js, Express.js.
- **Database**: PostgreSQL (Neon) with Sequelize ORM.
- **Security**: `bcryptjs` for password hashing, `jsonwebtoken` for auth, and the native `crypto` module for AES-256 encryption.

## Setup Instructions

### 1. Backend Configuration

1. Navigate to the backend directory: `cd backend`.
2. Install dependencies: `npm install`.
3. Create a `.env` file in the `backend` root:

```env
PORT=5000
DATABASE_URL=your_neon_postgresql_url?sslmode=require
JWT_SECRET=your_jwt_secret
ENCRYPTION_KEY=your_32_character_encryption_key

```

4. Start the server: `npm start`.

### 2. Frontend Configuration

1. Navigate to the frontend directory: `cd frontend`.
2. Install dependencies: `npm install`.
3. Ensure your `src/services/api.js` points to your backend URL.
4. Start the application: `npm start`.

## API Endpoints

| Method | Endpoint             | Description                           | Access        |
| ------ | -------------------- | ------------------------------------- | ------------- |
| POST   | `/api/auth/register` | Creates a user and encrypts Aadhaar   | Public        |
| POST   | `/api/auth/login`    | Validates credentials and returns JWT | Public        |
| GET    | `/api/profile`       | Returns decrypted user profile        | Private (JWT) |

## Al Tool Usage Log

As per the assignment requirements, the following log details the use of AI tools during development:

- **Al-Assisted Tasks**:
- **Encryption Logic**: Generated the AES-256-CBC helper class using the Node.js `crypto` module to ensure correct IV handling.

- **Effectiveness Score**: 5/5
- **Justification**: The AI tool was highly effective in generating secure encryption logic.
