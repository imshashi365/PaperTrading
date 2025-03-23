const {model} = require("mongoose");
const {ordersSchema} = require("../schemas/ordersSchema");
const OrderModel = model("order", ordersSchema);

module.exports = {OrderModel};