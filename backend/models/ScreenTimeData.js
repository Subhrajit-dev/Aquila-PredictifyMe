const mongoose = require('mongoose');

const screenTimeDataSchema = new mongoose.Schema({
    clerkUserId: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: Date,
        required: true
    },
    totalMinutes: {
        type: Number,
        required: true,
        min: 0
    },
    lateNightMinutes: {
        type: Number, // Time after 11 PM
        default: 0
    },
    appUsage: [{
        appName: String,
        minutes: Number,
        category: {
            type: String,
            enum: ['social', 'productivity', 'entertainment', 'other'],
            default: 'other'
        }
    }],
    mostUsedApp: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

screenTimeDataSchema.index({ clerkUserId: 1, date: -1 });

module.exports = mongoose.model('ScreenTimeData', screenTimeDataSchema);
