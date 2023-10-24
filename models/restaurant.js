const mongoose = require("mongoose");

const restaurant = new mongoose.Schema(

    {

        name: {
            type: String,
            required: true,
            unique: true,
            default: 'some Restaurant',
        },
        addressId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Address",
            required: true,
            default: 1,
        }

    }
)
module.exports = mongoose.model("Restaurant", restaurant);