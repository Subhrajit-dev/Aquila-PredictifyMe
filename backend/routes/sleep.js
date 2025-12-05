const express = require('express');
const router = express.Router();
const SleepData = require('../models/SleepData');
const { requireAuth, extractUserId } = require('../middleware/clerkAuth');

// Apply auth middleware to all routes
router.use(requireAuth);
router.use(extractUserId);

// @route   POST /api/sleep
// @desc    Log sleep data
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { date, bedtime, wakeTime, quality, notes } = req.body;

        // Calculate total hours
        const bedtimeDate = new Date(bedtime);
        const wakeTimeDate = new Date(wakeTime);
        const totalHours = (wakeTimeDate - bedtimeDate) / (1000 * 60 * 60);

        const sleepData = await SleepData.create({
            clerkUserId: req.clerkUserId,
            date: new Date(date),
            bedtime: bedtimeDate,
            wakeTime: wakeTimeDate,
            totalHours,
            quality,
            notes
        });

        res.status(201).json({
            success: true,
            message: 'Sleep data logged successfully',
            data: sleepData
        });

    } catch (error) {
        console.error('Sleep data error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to log sleep data'
        });
    }
});

// @route   GET /api/sleep
// @desc    Get user's sleep data
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

        const sleepData = await SleepData.find(query)
            .sort({ date: -1 })
            .limit(parseInt(limit));

        // Calculate stats
        const avgSleep = sleepData.length > 0
            ? sleepData.reduce((sum, record) => sum + record.totalHours, 0) / sleepData.length
            : 0;

        res.json({
            success: true,
            data: {
                records: sleepData,
                stats: {
                    averageSleep: avgSleep.toFixed(2),
                    totalRecords: sleepData.length
                }
            }
        });

    } catch (error) {
        console.error('Get sleep data error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve sleep data'
        });
    }
});

// @route   GET /api/sleep/stats
// @desc    Get sleep statistics
// @access  Private
router.get('/stats', async (req, res) => {
    try {
        const { days = 7 } = req.query;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - parseInt(days));

        const sleepData = await SleepData.find({
            clerkUserId: req.clerkUserId,
            date: { $gte: startDate }
        }).sort({ date: -1 });

        if (sleepData.length === 0) {
            return res.json({
                success: true,
                data: {
                    averageSleep: 0,
                    consistency: 0,
                    totalRecords: 0
                }
            });
        }

        const avgSleep = sleepData.reduce((sum, record) => sum + record.totalHours, 0) / sleepData.length;

        // Calculate consistency (lower std deviation = higher consistency)
        const variance = sleepData.reduce((sum, record) => {
            return sum + Math.pow(record.totalHours - avgSleep, 2);
        }, 0) / sleepData.length;
        const stdDev = Math.sqrt(variance);
        const consistency = Math.max(0, 100 - (stdDev * 15)); // Convert to percentage

        res.json({
            success: true,
            data: {
                averageSleep: avgSleep.toFixed(2),
                consistency: Math.round(consistency),
                totalRecords: sleepData.length,
                trend: sleepData.slice(0, 7).map(d => ({
                    date: d.date,
                    hours: d.totalHours
                }))
            }
        });

    } catch (error) {
        console.error('Sleep stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to calculate stats'
        });
    }
});

module.exports = router;
