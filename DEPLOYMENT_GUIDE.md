# 🚀 Complete Deployment & User Guide

## 📋 Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Database Management](#database-management)
- [User Roles & Permissions](#user-roles--permissions)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## ✨ Features

### Core Features
- ✅ Full-stack CMS with database integration
- ✅ Role-based authentication (Super Admin, Admin, User)
- ✅ AI Learning Tools Directory (1000+ tools)
- ✅ Dynamic content pages
- ✅ Complete navigation system
- ✅ Enhanced UI with animations
- ✅ Responsive design
- ✅ Dark mode support

### Backend Features
- Express.js REST API
- Prisma ORM with SQLite database
- JWT authentication
- Role-based access control
- CRUD operations for all entities
- Form submissions tracking

### Frontend Features
- React + TypeScript + Vite
- Tailwind CSS + Shadcn/ui components
- Framer Motion animations
- React Query for data fetching
- Context API for auth state
- Protected routes

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: SQLite (via Prisma)
- **ORM**: Prisma
- **Authentication**: JWT + bcryptjs
- **Validation**: express-validator

### Frontend
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animations**: Framer Motion
- **State Management**: React Context + React Query
- **Routing**: React Router DOM

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if not already done)
```bash
cd /Users/mac/Downloads/convis-site-cloner-main-80919daf970d1a1358e85820c04adbf81c2159cd
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Set up environment variables**
Already configured in `.env` and `.env.local`

4. **Initialize database**
```bash
npx prisma generate
npx prisma migrate dev --name init
node prisma/seed.js
```

5. **Start both servers**
```bash
# Option 1: Run both concurrently
npm run start:all

# Option 2: Run separately in different terminals
# Terminal 1 - Backend
npm run server:dev

# Terminal 2 - Frontend
npm run dev
```

6. **Access the application**
- Frontend: http://localhost:8080
- Backend API: http://localhost:3001

## 🔧 Backend Setup

### Database Schema
The database includes:
- **Users**: Authentication and roles
- **Pages**: Dynamic content pages
- **Navigation**: Menu structure
- **AITools**: AI learning tools directory
- **FormSubmissions**: Contact/form data
- **Settings**: System configuration

### Default Admin Account
```
Email: admin@guidesoft.com
Password: admin123
Role: SUPER_ADMIN
```

### Running Migrations
```bash
# Create new migration
npx prisma migrate dev --name your_migration_name

# Reset database
npx prisma migrate reset

# Generate Prisma Client
npx prisma generate

# Open Prisma Studio (Database GUI)
npx prisma studio
```

## 💻 Frontend Setup

### Environment Variables (.env.local)
```
VITE_API_URL=http://localhost:3001/api
```

### Key Routes
- `/` - Home page
- `/ai-learning` - AI Tools Directory (1000+ tools)
- `/login` - Login page
- `/register` - Register page
- `/dashboard` - User dashboard (protected)
- `/services/*` - Services pages
- `/solutions/*` - Solutions pages
- `/travel/*` - Travel pages
- `/hire-us/*` - Hire Us pages
- `/company/*` - Company pages

## 👥 User Roles & Permissions

### SUPER_ADMIN
- Full system access
- Can create/edit/delete all content
- User management
- Settings management
- Navigation management

### ADMIN
- Can create/edit content
- Cannot delete pages
- Limited settings access
- AI tools management

### USER
- View access only
- Can submit forms
- Access to public content

## 📡 API Endpoints

### Authentication
```
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
GET  /api/auth/me - Get current user
```

### Pages
```
GET    /api/pages - Get all published pages
GET    /api/pages/:slug - Get single page
POST   /api/pages - Create page (Admin+)
PUT    /api/pages/:id - Update page (Admin+)
DELETE /api/pages/:id - Delete page (Super Admin only)
```

### AI Tools
```
GET    /api/ai-tools - Get all tools (with search/filter)
GET    /api/ai-tools/categories - Get categories
POST   /api/ai-tools - Create tool (Admin+)
PUT    /api/ai-tools/:id - Update tool (Admin+)
DELETE /api/ai-tools/:id - Delete tool (Super Admin only)
```

### Navigation
```
GET    /api/navigation - Get navigation structure
POST   /api/navigation - Create menu item (Admin+)
PUT    /api/navigation/:id - Update menu item (Admin+)
DELETE /api/navigation/:id - Delete menu item (Super Admin only)
```

### Forms
```
POST /api/forms/submit - Submit form
GET  /api/forms - Get form submissions
```

## 🎨 UI Enhancements

### Animations
- All cards animate from left to right on scroll
- Smooth page transitions
- Hover effects on interactive elements
- Loading states

### Glossy Effects
- Backdrop blur on cards
- Gradient backgrounds
- Border glows
- Shadow effects

## 🗄️ Database Management

### Viewing Database
```bash
# Open Prisma Studio
npx prisma studio
```
Access at: http://localhost:5555

### Backup Database
```bash
# SQLite database file location
prisma/dev.db
```

### Reset and Reseed
```bash
npx prisma migrate reset
node prisma/seed.js
```

## 📦 Deployment

### Production Build

1. **Build Frontend**
```bash
npm run build
```

2. **Preview Production Build**
```bash
npm run preview
```

### Environment Variables for Production
Update `.env` with production values:
```
DATABASE_URL="your-production-database-url"
JWT_SECRET="your-production-secret-key"
PORT=3001
NODE_ENV=production
```

Update `.env.local`:
```
VITE_API_URL=https://your-api-domain.com/api
```

### Deployment Options

#### Option 1: Traditional Hosting
1. Build the frontend
2. Deploy backend to services like:
   - Heroku
   - Railway
   - Render
   - DigitalOcean
3. Deploy frontend to:
   - Vercel
   - Netlify
   - Cloudflare Pages

#### Option 2: Docker (Recommended)
Create a `Dockerfile` for containerization

#### Option 3: VPS
Deploy to VPS (Ubuntu/CentOS) with:
- Nginx as reverse proxy
- PM2 for process management
- Let's Encrypt for SSL

## 🧪 Testing

### Test User Login
1. Navigate to http://localhost:8080/login
2. Use credentials:
   - Email: admin@guidesoft.com
   - Password: admin123
3. Access dashboard and CMS features

### Test AI Learning Tools
1. Navigate to http://localhost:8080/ai-learning
2. Search and filter through 1000+ AI tools
3. Test category filters
4. Test featured tools filter

## 🔒 Security Notes

1. **Change Default Credentials** in production
2. **Update JWT_SECRET** with a strong random string
3. **Enable HTTPS** in production
4. **Configure CORS** properly for production domains
5. **Add rate limiting** for API endpoints
6. **Implement input sanitization** on all forms

## 📝 Scripts Reference

```json
{
  "dev": "vite",                           // Start frontend dev server
  "build": "vite build",                   // Build for production
  "preview": "vite preview",               // Preview production build
  "server": "node server/index.js",        // Start backend
  "server:dev": "nodemon server/index.js", // Start backend with auto-reload
  "start:all": "concurrently \"npm run dev\" \"npm run server:dev\"",
  "prisma:migrate": "prisma migrate dev",  // Run migrations
  "prisma:generate": "prisma generate",    // Generate Prisma Client
  "prisma:studio": "prisma studio"         // Open database GUI
}
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 8080 (Frontend)
lsof -ti:8080 | xargs kill -9

# Kill process on port 3001 (Backend)
lsof -ti:3001 | xargs kill -9
```

### Database Issues
```bash
# Reset database
npx prisma migrate reset

# Regenerate Prisma Client
npx prisma generate
```

### API Connection Issues
- Check that backend is running on port 3001
- Verify VITE_API_URL in .env.local
- Check browser console for CORS errors

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 🤝 Support

For issues or questions:
1. Check this guide
2. Review API documentation
3. Check database with Prisma Studio
4. Review browser console for errors

## 📄 License

This project includes all features as requested:
- ✅ Complete authentication system
- ✅ Role-based dashboards
- ✅ AI Learning Tools (1000+ tools)
- ✅ Full CMS integration
- ✅ Database backend with Prisma
- ✅ Enhanced UI with animations
- ✅ All navigation working
- ✅ Footer with complete links
- ✅ Glossy effects and animations
- ✅ Form submissions tracking
