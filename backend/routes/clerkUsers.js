const express = require('express');
const router = express.Router();
const ClerkUser = require('../models/ClerkUser');
const { requireAuth, extractUserId } = require('../middleware/clerkAuth');

// Apply auth middleware to all routes
router.use(requireAuth);
router.use(extractUserId);

// @route   POST /api/clerk-users/subscription
// @desc    Save or update user subscription
// @access  Private
router.post('/subscription', async (req, res) => {
    try {
        const { plan, price, period, billingCycle, isTrial } = req.body;

        // Calculate subscription dates
        const startDate = new Date();
        let endDate = new Date();

        if (isTrial || billingCycle === 'trial') {
            endDate.setMonth(endDate.getMonth() + 3); // 3 months trial
        } else if (billingCycle === 'quarterly') {
            endDate.setMonth(endDate.getMonth() + 3);
        } else if (billingCycle === 'yearly') {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        // Determine plan tier
        let planTier = 'free';
        if (plan.toLowerCase().includes('basic')) planTier = 'basic';
        else if (plan.toLowerCase().includes('pro')) planTier = 'pro';

        // Find or create user
        let user = await ClerkUser.findOne({ clerkId: req.clerkUserId });

        if (!user) {
            // Create new user if doesn't exist
            // Get user info from Clerk (available in req.auth)
            const { emailAddress, firstName, lastName, imageUrl } = req.auth;

            user = await ClerkUser.create({
                clerkId: req.clerkUserId,
                email: emailAddress || req.auth.userId + '@clerk.user',
                firstName: firstName || '',
                lastName: lastName || '',
                profileImageUrl: imageUrl || '',
                subscription: {
                    plan: planTier,
                    status: 'active',
                    startDate,
                    endDate,
                    billingCycle: isTrial ? 'trial' : billingCycle,
                    isTrial: isTrial || false
                }
            });
        } else {
            // Update existing user's subscription
            user.subscription = {
                plan: planTier,
                status: 'active',
                startDate,
                endDate,
                billingCycle: isTrial ? 'trial' : billingCycle,
                isTrial: isTrial || false
            };
            await user.save();
        }

        res.status(200).json({
            success: true,
            message: 'Subscription saved successfully',
            data: {
                subscription: user.subscription,
                user: {
                    clerkId: user.clerkId,
                    email: user.email,
                    firstName: user.firstName
                }
            }
        });

    } catch (error) {
        console.error('Save subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to save subscription',
            error: error.message
        });
    }
});

// @route   GET /api/clerk-users/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', async (req, res) => {
    try {
        const user = await ClerkUser.findOne({ clerkId: req.clerkUserId });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found in database'
            });
        }

        res.json({
            success: true,
            data: { user }
        });

    } catch (error) {
        console.error('Get user error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve user data'
        });
    }
});

// @route   GET /api/clerk-users/subscription
// @desc    Get current user's subscription
// @access  Private
router.get('/subscription', async (req, res) => {
    try {
        const user = await ClerkUser.findOne({ clerkId: req.clerkUserId });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            data: {
                subscription: user.subscription
            }
        });

    } catch (error) {
        console.error('Get subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve subscription'
        });
    }
});

module.exports = router;
