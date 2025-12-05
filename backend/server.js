const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
// Raw body for webhooks (must come before express.json())
app.use('/api/webhooks', express.raw({ type: 'application/json' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/subscriptions', require('./routes/subscriptions'));
app.use('/api/webhooks', require('./routes/webhooks'));
app.use('/api/sleep', require('./routes/sleep'));
app.use('/api/screen-time', require('./routes/screenTime'));
app.use('/api/stress', require('./routes/stress'));

// Health check route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'PredictifyMe API is running',
        timestamp: new Date().toISOString(),
        clerkIntegrated: !!process.env.CLERK_SECRET_KEY
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV}`);
    console.log(`🔐 Clerk Integration: ${process.env.CLERK_SECRET_KEY ? 'Enabled' : 'Disabled'}`);
});
