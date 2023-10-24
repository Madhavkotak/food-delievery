const mongoose = require("mongoose");

const item = new mongoose.Schema(

    {
        
        name: {
            type: String,
            required: true,
            default: 'some food',
        },
        price: {

            type: Number,
            required: true,
            default: 0
        },
        restaurantId:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Restaurant",
            required: true,
        }
    }
)
module.exports = mongoose.model("FoodItem", item);