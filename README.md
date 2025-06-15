# Authentication API Service

A secure authentication service built with Node.js, Express, and PostgreSQL, featuring JWT-based authentication, Google OAuth integration, and role-based access control.

## Features

- Email & password authentication
- Google OAuth integration
- JWT-based session management with refresh tokens
- Role-based access control (admin/user)
- Secure password hashing with bcrypt
- Input validation and sanitization
- Error handling middleware
- PostgreSQL database with Sequelize ORM
- Docker support for PostgreSQL and pgAdmin
- CORS enabled for frontend integration

## Prerequisites

- Node.js (v14 or higher)
- Docker and Docker Compose
- Google OAuth credentials

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd auth-service
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following configuration:
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5434
DB_NAME=auth_service
DB_USER=auth_user
DB_PASSWORD=auth_password

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback
FRONTEND_URL=http://localhost:3000
```

4. Start the PostgreSQL and pgAdmin containers:
```bash
docker-compose up -d
```

5. Create the admin user:
```bash
npx sequelize-cli db:seed:all
```

6. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Database Access

### PostgreSQL
- Host: localhost
- Port: 5434
- Database: auth_service
- Username: auth_user
- Password: auth_password

### pgAdmin
- URL: http://localhost:5050
- Email: admin@admin.com
- Password: admin

## Default Admin Account

An admin account is automatically created during setup:
- Email: admin@example.com
- Password: admin123

Use these credentials to access admin-only features.

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user account
  ```json
  {
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }
  ```

- `POST /api/auth/login` - Login with email and password
  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```

- `GET /api/auth/google` - Initiate Google OAuth login
- `GET /api/auth/google/callback` - Google OAuth callback
- `POST /api/auth/refresh-token` - Refresh access token
  ```json
  {
    "refreshToken": "your_refresh_token"
  }
  ```

- `POST /api/auth/logout` - Logout user
  ```json
  {
    "refreshToken": "your_refresh_token"
  }
  ```

### User Management
- `GET /api/users/me` - Get current user profile
- `PATCH /api/users/me` - Update current user profile
  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com"
  }
  ```

### Admin Routes
- `GET /api/users` - Get all users (admin only)
- `PATCH /api/users/:userId/role` - Update user role (admin only)
  ```json
  {
    "role": "admin" // or "user"
  }
  ```
- `DELETE /api/users/:userId` - Delete user (admin only)

## Security Features

- Secure password hashing with bcrypt
- JWT token-based authentication
- Input validation and sanitization
- Password requirements:
  - Minimum 6 characters
  - Must contain at least one number
- CORS protection
- Role-based access control
- Refresh token rotation
- Secure session management

## Error Handling

The API returns appropriate HTTP status codes and error messages:

- `400` - Bad Request (validation errors, invalid input)
- `401` - Unauthorized (invalid credentials, expired token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

## Development

### Database Migrations and Seeds
```bash
# Run migrations
npm run migrate

# Create admin user
npx sequelize-cli db:seed:all

# Undo admin user creation
npx sequelize-cli db:seed:undo
```

### Testing
```bash
npm test
```

## Docker Configuration

The project includes a `docker-compose.yml` file that sets up:
- PostgreSQL database
- pgAdmin web interface

To rebuild containers:
```bash
docker-compose down
docker-compose up -d --build
```

## Frontend Integration

A simple HTML/JavaScript frontend is provided in `public/index.html` for testing the authentication service. It includes:
- User registration
- Login form
- Google Sign-In
- Profile management
- Token management
- Automatic token refresh

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 