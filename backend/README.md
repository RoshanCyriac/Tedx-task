# TEDx Authentication Backend

A secure authentication API service with JWT tokens, Google OAuth, and PostgreSQL database integration.

## 🚀 Quick Start

### Local Development

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**:
   ```bash
   cp .env.example .env
   # Update .env with your configuration
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000`

## 🌐 Deploy to Render

### Option 1: Manual Deployment

1. **Create Web Service**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configure Build Settings**:
   ```
   Root Directory: backend
   Build Command: npm install
   Start Command: npm start
   ```

3. **Set Environment Variables**:
   Add all variables from your `.env` file in the Render dashboard

### Option 2: Using render.yaml

1. **Push to GitHub** with the `render.yaml` file
2. **Import to Render** - it will automatically configure everything
3. **Set Environment Variables** in the Render dashboard

## 📋 Environment Variables

Required environment variables for deployment:

```bash
# Server Configuration
NODE_ENV=production
PORT=3000

# Database Configuration
DB_HOST=your_postgres_host
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

# JWT Configuration
JWT_SECRET=your_jwt_secret_key
JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=https://your-backend-app.onrender.com/api/auth/google/callback
FRONTEND_URL=https://tedx-frontend.onrender.com
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/google` - Google OAuth initiation
- `GET /api/auth/google/callback` - Google OAuth callback
- `POST /api/auth/refresh-token` - Token refresh

### User Management
- `GET /api/users/me` - Get current user
- `GET /api/users` - Get all users (admin only)
- `PATCH /api/users/:id/role` - Update user role (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

### Health Check
- `GET /health` - Service health status

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for password security
- **CORS Protection**: Configured for specific origins
- **Input Validation**: Express-validator for request validation
- **Environment Variables**: Sensitive data protection

## 🗄️ Database

Uses PostgreSQL with Sequelize ORM:
- **User Model**: User authentication and profile data
- **Migrations**: Database schema management
- **Seeds**: Initial data setup

## 📊 Project Structure

```
backend/
├── src/
│   ├── config/          # Database and passport configuration
│   ├── middleware/      # Custom middleware
│   ├── models/          # Sequelize models
│   ├── routes/          # API routes
│   └── index.js         # Main server file
├── public/              # Static files
├── .env                 # Environment variables
├── package.json         # Dependencies and scripts
└── render.yaml          # Render deployment configuration
```

## 🛠️ Development Commands

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Run database migrations
npm run migrate

# Run database seeds
npm run seed

# Run tests
npm test
```

## 🔄 Frontend Integration

This backend is designed to work with the TEDx Frontend deployed at:
- **Frontend URL**: https://tedx-frontend.onrender.com

Make sure to update the `FRONTEND_URL` environment variable when deploying.

## 🐛 Troubleshooting

### Common Issues

1. **Database Connection Error**:
   - Verify PostgreSQL credentials
   - Check if database is accessible from Render

2. **Google OAuth Not Working**:
   - Update Google Console with new callback URL
   - Verify GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET

3. **CORS Errors**:
   - Ensure frontend URL is in CORS configuration
   - Check FRONTEND_URL environment variable

### Debug Mode

Enable detailed logging by setting:
```bash
NODE_ENV=development
```

## 📄 License

This project is licensed under the MIT License.

---

**Ready for deployment to Render!** 🚀 