const foodItem = require('../models/foodItem');


exports.addfoodItem = async (req, res) => {
    try {
        const { name, price, restaurantId } = req.body;
        const response = await foodItem.create({ name, price, restaurantId });

        res.status(200).json(
            {
                success: true,
                data: response,
                messege: 'Entry of food item successful'
            }
        )
    }
    catch (err) {
        console.log(`Some error occured while adding fooditem ${err}`);
    }
}

exports.getAllFoodItem = async (req, res) => {

    try {

        const item = await foodItem.find();

        res.json({
            item,
        });

    }
    catch (err) {
        console.log("Error while fetching fooditems" + err);
    }
}

exports.deleteFoodItem = async (req, res) => {
    try {
        fid = req.param('id');
        console.log(fid);
        const deleted = await foodItem.findByIdAndRemove(fid);
        res.status(200).json({
            success: true,
            data: deleted,
            message: "Food deleted successfully",
        })

    }
    catch (err) {
        console.log(`An error occured while deleting food item ${err}`);
    }
}

exports.updatePrice = async (req, res) => {
    try {
        const id = req.param('id');
        const newPrice = req.param('price');
        const updated = await foodItem.findOneAndUpdate({ _id: id }, { price: newPrice }, {new : true});
        res.status(200).json({
            success: true,
            data: updated,
            message: "Price of food updated succesfully",
        })

    }
    catch (err) {
        console.log(`An error occured while updating price of food item ${err}`);
    }
}