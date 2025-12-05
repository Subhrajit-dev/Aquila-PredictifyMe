const mongoose = require('mongoose');

const clerkUserSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    firstName: String,
    lastName: String,
    profileImageUrl: String,
    subscription: {
        plan: {
            type: String,
            enum: ['free', 'basic', 'pro'],
            default: 'free'
        },
        status: {
            type: String,
            enum: ['active', 'inactive', 'trial', 'cancelled'],
            default: 'inactive'
        },
        startDate: Date,
        endDate: Date,
        billingCycle: {
            type: String,
            enum: ['quarterly', 'yearly', 'trial'],
            default: 'quarterly'
        },
        isTrial: {
            type: Boolean,
            default: false
        }
    },
    preferences: {
        notifications: {
            email: { type: Boolean, default: true },
            push: { type: Boolean, default: true },
            earlyWarnings: { type: Boolean, default: true }
        },
        dataCollection: {
            sleep: { type: Boolean, default: true },
            screenTime: { type: Boolean, default: true },
            typing: { type: Boolean, default: true },
            stress: { type: Boolean, default: true }
        }
    },
    lastActive: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update timestamp on save
clerkUserSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('ClerkUser', clerkUserSchema);
