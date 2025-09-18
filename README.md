# 🌱 India Carbon Registry - Complete Full-Stack Prototype

A comprehensive carbon credit registry platform for India with complete backend, database, authentication, email verification, and modern frontend.

## 🚀 Features

### Backend Features
- ✅ **User Authentication & Authorization** with JWT
- ✅ **Email Verification System** with beautiful HTML emails
- ✅ **Password Reset Functionality**
- ✅ **User Profile Management**
- ✅ **Project Registry System** for carbon credit projects
- ✅ **Transaction Management** for carbon credit trading
- ✅ **Role-based Access Control** (User, Admin, Verifier, Developer)
- ✅ **Rate Limiting & Security** with Helmet, CORS
- ✅ **File Upload Support** with Multer
- ✅ **Comprehensive Error Handling**
- ✅ **Account Lockout Protection**
- ✅ **MongoDB Database** with Mongoose ODM

### Frontend Features
- ✅ **Modern React 18** with TypeScript
- ✅ **Vite** for blazing fast development
- ✅ **Tailwind CSS** for beautiful styling
- ✅ **Radix UI Components** for accessibility
- ✅ **Responsive Design** for all devices
- ✅ **State Management** with React hooks
- ✅ **API Integration** with fetch/axios
- ✅ **Form Validation** with react-hook-form
- ✅ **Charts & Analytics** with Recharts
- ✅ **Landing Page, Dashboard, Project Registry**

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** Authentication
- **Nodemailer** for emails
- **bcryptjs** for password hashing
- **express-validator** for validation
- **express-rate-limit** for security

### Frontend
- **React 18** + **TypeScript**
- **Vite** build tool
- **Tailwind CSS** + **Radix UI**
- **Recharts** for data visualization
- **Lucide React** for icons

## 📋 Prerequisites

1. **Node.js** (v18 or higher)
2. **MongoDB** (local or cloud)
3. **Git**
4. **Email Account** (for SMTP - Gmail recommended)

## 🚀 Quick Start

### 1. Clone and Setup
```bash
cd carbon-registry-prototype-new
```

### 2. Backend Setup
```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file with your settings
cp .env.example .env

# Edit .env file with your credentials:
# - MongoDB URI
# - JWT Secret (generate a long random string)
# - Email SMTP credentials (Gmail App Password)
```

#### Example .env configuration:
```env
NODE_ENV=development
PORT=5000

# MongoDB (install locally or use MongoDB Atlas)
MONGODB_URI=mongodb://localhost:27017/carbon-registry

# JWT Secret (generate a secure random string)
JWT_SECRET=your_super_secure_jwt_secret_key_here_make_it_very_long

# Email Configuration (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@carbonregistry.gov.in

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

### 3. Frontend Setup
```bash
# Open new terminal and navigate to frontend
cd ../

# Install frontend dependencies
npm install
```

### 4. Database Setup
```bash
# Make sure MongoDB is running locally, or use MongoDB Atlas

# Seed the database with sample data (optional)
cd backend
npm run seed
```

### 5. Start the Application
```bash
# Terminal 1: Start Backend (from backend folder)
cd backend
npm run dev
# Backend will run on http://localhost:5000

# Terminal 2: Start Frontend (from root folder)
npm run dev
# Frontend will run on http://localhost:5173
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-email` - Verify email address
- `POST /api/auth/resend-verification` - Resend verification email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/auth/me` - Get current user (protected)
- `PUT /api/auth/profile` - Update profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)

### Projects (Coming Soon)
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Dashboard (Coming Soon)
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/analytics` - Get analytics data

## 📧 Email Setup (Gmail)

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use the generated password in EMAIL_PASS

## 🎯 Usage Flow

### 1. User Registration
```bash
POST /api/auth/register
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "organization": {
    "name": "Green Energy Corp",
    "type": "Corporate"
  }
}
```

### 2. Email Verification
- User receives verification email
- Clicks link or submits token
- Account becomes active

### 3. Login
```bash
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "password123"
}
```

### 4. Access Protected Routes
Include JWT token in Authorization header:
```bash
Authorization: Bearer <your-jwt-token>
```

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Nodemon for auto-restart
```

### Frontend Development
```bash
npm run dev  # Vite dev server with HMR
```

### Database Management
```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/carbon-registry

# View collections
show collections

# View users
db.users.find().pretty()
```

## 🚀 Deployment

### Backend (Node.js)
1. Set NODE_ENV=production
2. Deploy to services like:
   - Railway
   - Render
   - Heroku
   - DigitalOcean App Platform

### Frontend (React)
1. Build: `npm run build`
2. Deploy to services like:
   - Vercel
   - Netlify
   - Cloudflare Pages

### Database
- MongoDB Atlas (recommended)
- Self-hosted MongoDB

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT token authentication
- Rate limiting
- Account lockout after failed attempts
- Email verification required
- CORS protection
- Helmet security headers
- Input validation
- SQL injection prevention

## 📊 Database Schema

### Users Collection
- Authentication data
- Profile information
- Organization details
- Verification status
- Security settings

### Projects Collection
- Project details
- Carbon credit information
- Location data
- Timeline and status
- Verification records

### Transactions Collection
- Credit transfers
- Trading records
- Retirement tracking
- Verification data

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📞 Support

For questions or issues:
- Check the logs in terminal
- Verify environment variables
- Ensure MongoDB is running
- Check email SMTP settings

## 📝 License

This project is for educational purposes and prototype development.

---

**Built with ❤️ for India's Carbon Neutral Future 🌱**
