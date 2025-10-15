import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import pagesRoutes from './routes/pages.js';
import navigationRoutes from './routes/navigation.js';
import aiToolsRoutes from './routes/ai-tools.js';
import settingsRoutes from './routes/settings.js';
import formsRoutes from './routes/forms.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration - Allow all origins in development
const corsOptions = {
  origin: true, // Allow all origins
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400 // 24 hours
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pages', pagesRoutes);
app.use('/api/navigation', navigationRoutes);
app.use('/api/ai-tools', aiToolsRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/forms', formsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

export default app;
