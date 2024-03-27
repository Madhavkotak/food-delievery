const mongoose = require("mongoose");

const orderItems = new mongoose.Schema(

    {

        foodId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "FoodItem",
            required: true,
        },

        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            unique: true,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },

    }
)
module.exports = mongoose.model("orderItems", orderItems);