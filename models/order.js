const mongoose = require("mongoose");

const order = new mongoose.Schema(

    {
        orderItemId: [{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            default: 'Some Restaurant',
        }],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        total:
        {
            type: Number,
            required: true
        },
        orderDate: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true
        }
    }
)
module.exports = mongoose.model("Order", order);