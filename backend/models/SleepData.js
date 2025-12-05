const mongoose = require('mongoose');

const sleepDataSchema = new mongoose.Schema({
    clerkUserId: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: Date,
        required: true
    },
    bedtime: {
        type: Date,
        required: true
    },
    wakeTime: {
        type: Date,
        required: true
    },
    totalHours: {
        type: Number,
        required: true,
        min: 0,
        max: 24
    },
    quality: {
        type: String,
        enum: ['poor', 'fair', 'good', 'excellent'],
        default: 'fair'
    },
    notes: {
        type: String,
        maxlength: 500
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Index for faster queries
sleepDataSchema.index({ clerkUserId: 1, date: -1 });

module.exports = mongoose.model('SleepData', sleepDataSchema);
