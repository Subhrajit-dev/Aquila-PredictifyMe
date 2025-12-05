const express = require('express');
const router = express.Router();
const StressData = require('../models/StressData');
const { requireAuth, extractUserId } = require('../middleware/clerkAuth');

router.use(requireAuth);
router.use(extractUserId);

// @route   POST /api/stress
// @desc    Log stress data
// @access  Private
router.post('/', async (req, res) => {
    try {
        const { date, stressScore, level, sources, symptoms, notes } = req.body;

        const stressData = await StressData.create({
            clerkUserId: req.clerkUserId,
            date: new Date(date),
            stressScore,
            level,
            sources: sources || [],
            symptoms: symptoms || {},
            notes
        });

        res.status(201).json({
            success: true,
            message: 'Stress data logged successfully',
            data: stressData
        });

    } catch (error) {
        console.error('Stress data error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to log stress data'
        });
    }
});

// @route   GET /api/stress
// @desc    Get user's stress data
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

        const stressData = await StressData.find(query)
            .sort({ date: -1 })
            .limit(parseInt(limit));

        // Calculate stats
        const avgStress = stressData.length > 0
            ? stressData.reduce((sum, record) => sum + record.stressScore, 0) / stressData.length
            : 0;

        res.json({
            success: true,
            data: {
                records: stressData,
                stats: {
                    averageStress: Math.round(avgStress),
                    totalRecords: stressData.length
                }
            }
        });

    } catch (error) {
        console.error('Get stress data error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve stress data'
        });
    }
});

// @route   GET /api/stress/stats
// @desc    Get stress statistics and predictions
// @access  Private
router.get('/stats', async (req, res) => {
    try {
        const { days = 7 } = req.query;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - parseInt(days));

        const stressData = await StressData.find({
            clerkUserId: req.clerkUserId,
            date: { $gte: startDate }
        }).sort({ date: -1 });

        if (stressData.length === 0) {
            return res.json({
                success: true,
                data: {
                    currentStress: 0,
                    weeklyAverage: 0,
                    trend: 'stable',
                    totalRecords: 0
                }
            });
        }

        const weeklyAvg = stressData.reduce((sum, record) => sum + record.stressScore, 0) / stressData.length;
        const currentStress = stressData[0]?.stressScore || 0;

        // Simple trend calculation
        let trend = 'stable';
        if (stressData.length >= 3) {
            const recent = stressData.slice(0, 3).reduce((sum, r) => sum + r.stressScore, 0) / 3;
            const older = stressData.slice(3, 6).reduce((sum, r) => sum + r.stressScore, 0) / Math.max(stressData.slice(3, 6).length, 1);

            if (recent > older + 10) trend = 'worsening';
            else if (recent < older - 10) trend = 'improving';
        }

        res.json({
            success: true,
            data: {
                currentStress,
                weeklyAverage: Math.round(weeklyAvg),
                trend,
                totalRecords: stressData.length,
                history: stressData.slice(0, 7).map(d => ({
                    date: d.date,
                    score: d.stressScore,
                    level: d.level
                }))
            }
        });

    } catch (error) {
        console.error('Stress stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to calculate stats'
        });
    }
});

module.exports = router;
