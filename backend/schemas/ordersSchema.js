const {Schema} = require("mongoose");

const ordersSchema = new Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
    userEmail: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        enum: ['BUY', 'SELL'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Create compound index for efficient querying
ordersSchema.index({ userId: 1, timestamp: -1 });

module.exports = { ordersSchema };