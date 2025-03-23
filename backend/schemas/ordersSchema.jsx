const {Schema} = require("mongoose");

const ordersSchema = new Schema({
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
});

module.exports = { ordersSchema };