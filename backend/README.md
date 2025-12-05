# PredictifyMe Backend

Backend API for PredictifyMe application with user authentication and subscription management.

## Features

- User registration and authentication
- JWT-based authorization
- Subscription management (Basic & Pro plans)
- MongoDB database integration
- Password hashing with bcrypt
- Input validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
- Copy `.env.example` to `.env`
- Update the values in `.env`:
  - `MONGODB_URI`: Your MongoDB connection string
  - `JWT_SECRET`: A secure random string for JWT signing
  - `PORT`: Server port (default: 5000)

## Running the Server

### Development mode (with auto-reload):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user profile

### Subscriptions
- `POST /api/subscriptions/create` - Create/update subscription
- `GET /api/subscriptions/:userId` - Get user subscription
- `DELETE /api/subscriptions/:userId` - Cancel subscription

### Health Check
- `GET /api/health` - Check API status

## Request Examples

### Register User
```json
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Create Subscription
```json
POST /api/subscriptions/create
{
  "userId": "user_id_here",
  "plan": "Basic Plan",
  "billingCycle": "quarterly",
  "isTrial": false
}
```

## Database Schema

### User Model
- name: String
- email: String (unique)
- password: String (hashed)
- subscription: Object
  - plan: String (none/basic/pro)
  - status: String (active/inactive/trial/cancelled)
  - startDate: Date
  - endDate: Date
  - billingCycle: String
  - isTrial: Boolean
- createdAt: Date
- lastLogin: Date

## Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Input validation using express-validator
- CORS enabled for frontend integration

## Next Steps

1. Add authentication middleware for protected routes
2. Implement password reset functionality
3. Add email verification
4. Integrate payment gateway (Razorpay/Stripe)
5. Add rate limiting
6. Implement logging
