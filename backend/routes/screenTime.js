const express = require('express');
const router = express.Router();
const ScreenTimeData = require('../models/ScreenTimeData');
const { requireAuth, extractUserId } = require('../middleware/clerkAuth');

router.use(requireAuth);
router.use(extractUserId);

// @route   POST /api/screen-time
// @desc    Log screen time data
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { date, totalMinutes, lateNightMinutes, appUsage, mostUsedApp } = req.body;

        const screenTimeData = await ScreenTimeData.create({
            clerkUserId: req.clerkUserId,
            date: new Date(date),
            totalMinutes,
            lateNightMinutes: lateNightMinutes || 0,
            appUsage: appUsage || [],
            mostUsedApp
        });

        res.status(201).json({
            success: true,
            message: 'Screen time data logged successfully',
            data: screenTimeData
        });

    } catch (error) {
        console.error('Screen time data error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to log screen time data'
        });
    }
});

// @route   GET /api/screen-time
// @desc    Get user's screen time data
// @access  Private
router.get('/', async (req, res) => {
    try {
        const { startDate, endDate, limit = 30 } = req.query;

        const query = { clerkUserId: req.clerkUserId };

        if (startDate || endDate) {
            query.date = {};
            if (startDate) query.date.$gte = new Date(startDate);
            if (endDate) query.date.$lte = new Date(endDate);
        }

        const screenTimeData = await ScreenTimeData.find(query)
            .sort({ date: -1 })
            .limit(parseInt(limit));

        // Calculate stats
        const avgScreenTime = screenTimeData.length > 0
            ? screenTimeData.reduce((sum, record) => sum + record.totalMinutes, 0) / screenTimeData.length
            : 0;

        const avgLateNight = screenTimeData.length > 0
            ? screenTimeData.reduce((sum, record) => sum + record.lateNightMinutes, 0) / screenTimeData.length
            : 0;

        res.json({
            success: true,
            data: {
                records: screenTimeData,
                stats: {
                    averageScreenTime: Math.round(avgScreenTime),
                    averageLateNight: Math.round(avgLateNight),
                    totalRecords: screenTimeData.length
                }
            }
        });

    } catch (error) {
        console.error('Get screen time data error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve screen time data'
        });
    }
});

// @route   GET /api/screen-time/stats
// @desc    Get screen time statistics
// @access  Private
router.get('/stats', async (req, res) => {
    try {
        const { days = 7 } = req.query;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - parseInt(days));

        const screenTimeData = await ScreenTimeData.find({
            clerkUserId: req.clerkUserId,
            date: { $gte: startDate }
        }).sort({ date: -1 });

        if (screenTimeData.length === 0) {
            return res.json({
                success: true,
                data: {
                    dailyAverage: 0,
                    lateNightAverage: 0,
                    totalRecords: 0,
                    trend: []
                }
            });
        }

        const dailyAvg = screenTimeData.reduce((sum, record) => sum + record.totalMinutes, 0) / screenTimeData.length;
        const lateNightAvg = screenTimeData.reduce((sum, record) => sum + record.lateNightMinutes, 0) / screenTimeData.length;

        res.json({
            success: true,
            data: {
                dailyAverage: Math.round(dailyAvg),
                lateNightAverage: Math.round(lateNightAvg),
                totalRecords: screenTimeData.length,
                trend: screenTimeData.slice(0, 7).map(d => ({
                    date: d.date,
                    minutes: d.totalMinutes
                }))
            }
        });

    } catch (error) {
        console.error('Screen time stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to calculate stats'
        });
    }
});

module.exports = router;
