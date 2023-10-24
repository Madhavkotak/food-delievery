const mongoose = require("mongoose");

const address = new mongoose.Schema(

    {
        addressLine1: {
            type: String,
            required: true,
        },
        addressLine2: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        }

    }
)
module.exports = mongoose.model("Address", address);