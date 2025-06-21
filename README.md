# TEDx Authentication System

A complete authentication system with a modern frontend and secure backend API, designed for independent deployment and scalability.

## 🏗️ Project Structure

```
tedx/
├── frontend/                # Modern React-like frontend
│   ├── index.html          # Main HTML file
│   ├── styles.css          # Modern CSS with theming
│   ├── app.js              # Application logic
│   ├── config.js           # Configuration management
│   ├── package.json        # Frontend dependencies
│   ├── render.json         # Render static site config
│   └── README.md           # Frontend documentation
│
├── backend/                 # Node.js API server
│   ├── src/                # Source code
│   ├── public/             # Static files
│   ├── package.json        # Backend dependencies
│   ├── render.yaml         # Render web service config
│   └── README.md           # Backend documentation
│
└── README.md               # This file
```

## 🚀 Deployed Applications

### Frontend (Static Site)
- **URL**: [https://tedx-frontend.onrender.com](https://tedx-frontend.onrender.com)
- **Hosting**: Render Static Site
- **Features**: Modern UI, responsive design, theme switching

### Backend (API Server)
- **URL**: `https://your-backend-app.onrender.com` (to be deployed)
- **Hosting**: Render Web Service
- **Features**: JWT authentication, Google OAuth, PostgreSQL

## 🔧 Quick Setup

### Deploy Frontend (Already Done ✅)
The frontend is already deployed at: https://tedx-frontend.onrender.com

### Deploy Backend (Next Steps)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Organize backend for Render deployment"
   git push origin main
   ```

2. **Deploy on Render**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Set root directory to `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Set Environment Variables** in Render:
   ```
   NODE_ENV=production
   DB_HOST=your_postgres_host
   DB_PORT=5432
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   JWT_SECRET=your_jwt_secret_key
   JWT_REFRESH_SECRET=your_jwt_refresh_secret_key
   JWT_EXPIRES_IN=1h
   JWT_REFRESH_EXPIRES_IN=7d
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=https://your-backend-app.onrender.com/api/auth/google/callback
   FRONTEND_URL=https://tedx-frontend.onrender.com
   ```

4. **Update Frontend Configuration**:
   - Visit: https://tedx-frontend.onrender.com
   - Click the settings gear icon (⚙️)
   - Enter your backend URL: `https://your-backend-app.onrender.com`
   - Save configuration

## 🌟 Features

### Frontend Features
- ✅ Modern, responsive design
- ✅ Dark/Light theme toggle
- ✅ User authentication (login/signup)
- ✅ Google OAuth integration
- ✅ Admin panel for user management
- ✅ Real-time updates
- ✅ Mobile-first design
- ✅ Configuration management

### Backend Features
- ✅ JWT-based authentication
- ✅ Google OAuth integration
- ✅ PostgreSQL database
- ✅ Role-based access control
- ✅ Password hashing with bcrypt
- ✅ Input validation
- ✅ CORS protection
- ✅ Health check endpoint
- ✅ Production-ready configuration

## 🔐 Security

- **Frontend**: XSS protection, secure token storage, input validation
- **Backend**: JWT tokens, password hashing, CORS protection, environment variables
- **Database**: PostgreSQL with secure connection, role-based access

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 🛠️ Development

### Frontend Development
```bash
cd frontend
python3 -m http.server 8080
# Visit: http://localhost:8080
```

### Backend Development
```bash
cd backend
npm install
npm run dev
# API: http://localhost:3000
```

## 📚 Documentation

- **Frontend**: See `frontend/README.md`
- **Backend**: See `backend/README.md`
- **API Endpoints**: See backend documentation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Next Steps

1. **Deploy Backend**: Follow the deployment steps above
2. **Update Google OAuth**: Add your backend URL to Google Console
3. **Test Integration**: Verify frontend and backend work together
4. **Custom Domain**: (Optional) Add custom domains to both services

---

**Built with ❤️ for the TEDx community** 