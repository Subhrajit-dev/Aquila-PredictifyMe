const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route   POST /api/subscriptions/create
// @desc    Create or update subscription
// @access  Private (should add auth middleware)
router.post('/create', async (req, res) => {
    try {
        const { userId, plan, billingCycle, isTrial } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Calculate subscription dates
        const startDate = new Date();
        let endDate = new Date();

        if (isTrial) {
            endDate.setMonth(endDate.getMonth() + 3); // 3 months trial
        } else if (billingCycle === 'quarterly') {
            endDate.setMonth(endDate.getMonth() + 3);
        } else if (billingCycle === 'yearly') {
            endDate.setFullYear(endDate.getFullYear() + 1);
        }

        // Update user subscription
        user.subscription = {
            plan: plan.toLowerCase().includes('basic') ? 'basic' : 'pro',
            status: 'active',
            startDate,
            endDate,
            billingCycle: isTrial ? 'trial' : billingCycle,
            isTrial: isTrial || false
        };

        await user.save();

        res.json({
            success: true,
            message: 'Subscription created successfully',
            data: {
                subscription: user.subscription
            }
        });

    } catch (error) {
        console.error('Create subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

// @route   GET /api/subscriptions/:userId
// @desc    Get user subscription
// @access  Private
router.get('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);

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
            message: 'Server error'
        });
    }
});

// @route   DELETE /api/subscriptions/:userId
// @desc    Cancel subscription
// @access  Private
router.delete('/:userId', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        user.subscription.status = 'cancelled';
        await user.save();

        res.json({
            success: true,
            message: 'Subscription cancelled successfully',
            data: {
                subscription: user.subscription
            }
        });

    } catch (error) {
        console.error('Cancel subscription error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});

module.exports = router;
