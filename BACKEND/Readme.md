# Uber Clone Backend API Documentation

This document provides an overview of the Uber Clone backend API, including details about endpoints, request/response formats, and functionality.

---

## **Prerequisites**
- Node.js (v16 or above)
- MongoDB
- Environment variables:
  - `PORT`: Port on which the server runs.
  - `Database_connect`: MongoDB connection URI.
  - `JWT_SECRET`: Secret key for JWT.



## **Endpoints**

### **1. Health Check**
#### **GET /**
**Description:** Check if the server is running.

**Request:**
- Method: `GET`
- URL: `http://localhost:4000/`

**Response:**
```json
"hello uber"
```

---

### **2. Register User**
#### **POST /users/register**
**Description:** Register a new user.

**Request:**
- Method: `POST`
- URL: `http://localhost:3000/users/register`
- Headers:
  ```
  Content-Type: application/json
  ```
- Body (JSON):
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "123456"
  }
  ```

**Validation Rules:**
- `email`: Must be a valid email.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

**Response:**
- **Success (201):**
  ```json
  {
    "token": "<jwt-token>",
    "user": {
      "_id": "12345",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john@example.com",
      "createdAt": "2024-12-17T12:34:56.789Z",
      "updatedAt": "2024-12-17T12:34:56.789Z"
    }
  }
  ```
- **Validation Errors (400):**
  ```json
  {
    "errors": [
      { "msg": "Invalid email", "param": "email" },
      { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname" }
    ]
  }
  ```

---

## **Folder Structure**
```
BACKEND
├── controllers
│   └── user.controllers.js  # User-related business logic
├── db
│   └── database.js          # Database connection logic
├── Models
│   └── user.modals.js       # User schema definition
├── routes
│   └── user.routes.js       # User API routes
├── services
│   └── user.service.js      # User-related service functions
├── .env                     # Environment variables
├── index.js                 # Main application logic
├── Server.js                # HTTP server setup
```

---

## **Error Handling**
Ensure to check for errors at various levels:
1. **Validation Errors:** Handled by `express-validator`.
2. **Database Errors:** Check logs to debug MongoDB issues.
3. **Unhandled Errors:** Ensure proper try/catch blocks in async functions.

---

## **Dependencies**
- `express`: Web framework.
- `mongoose`: MongoDB object modeling.
- `dotenv`: Load environment variables.
- `bcrypt`: Password hashing.
- `jsonwebtoken`: JWT token generation.
- `express-validator`: Request validation.
- `cors`: Cross-Origin Resource Sharing.



