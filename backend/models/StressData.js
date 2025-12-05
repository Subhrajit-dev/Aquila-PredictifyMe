const mongoose = require('mongoose');

const stressDataSchema = new mongoose.Schema({
    clerkUserId: {
        type: String,
        required: true,
        index: true
    },
    date: {
        type: Date,
        required: true
    },
    stressScore: {
        type: Number, // 0-100
        required: true,
        min: 0,
        max: 100
    },
    level: {
        type: String,
        enum: ['low', 'moderate', 'high', 'severe'],
        required: true
    },
    sources: [{
        type: String,
        enum: ['workload', 'sleep', 'screen_time', 'typing_pattern', 'calendar', 'other']
    }],
    symptoms: {
        physical: [String],
        emotional: [String],
        behavioral: [String]
    },
    notes: {
        type: String,
        maxlength: 1000
    },
    aiPrediction: {
        nextWeekTrend: {
            type: String,
            enum: ['improving', 'stable', 'worsening']
        },
        confidence: {
            type: Number,
            min: 0,
            max: 100
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

stressDataSchema.index({ clerkUserId: 1, date: -1 });

module.exports = mongoose.model('StressData', stressDataSchema);
