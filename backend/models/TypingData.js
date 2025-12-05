const mongoose = require('mongoose');

const typingDataSchema = new mongoose.Schema({
    clerkUserId: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: Date,
        required: true
    },
    averageLatency: {
        type: Number, // in milliseconds
        required: true
    },
    consistency: {
        type: Number, // percentage 0-100
        required: true,
        min: 0,
        max: 100
    },
    totalKeystrokes: {
        type: Number,
        default: 0
    },
    errorRate: {
        type: Number, // percentage
        default: 0
    },
    stressIndicators: {
        hesitation: { type: Number, default: 0 },
        rapidTyping: { type: Number, default: 0 },
        deletionRate: { type: Number, default: 0 }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

typingDataSchema.index({ clerkUserId: 1, date: -1 });

module.exports = mongoose.model('TypingData', typingDataSchema);
