const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// Middleware to verify Clerk JWT tokens
const requireAuth = ClerkExpressRequireAuth({
    // This will automatically verify the JWT token from the Authorization header
    // and attach the user data to req.auth
});

// Middleware to extract Clerk user ID
const extractUserId = (req, res, next) => {
    try {
        if (!req.auth || !req.auth.userId) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized - No valid Clerk session found'
            });
        }

        // Attach clerkUserId to request for easy access
        req.clerkUserId = req.auth.userId;
        next();
    } catch (error) {
        console.error('Auth extraction error:', error);
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }
};

module.exports = {
    requireAuth,
    extractUserId
};
