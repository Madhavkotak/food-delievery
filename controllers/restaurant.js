const restaurant = require('../models/restaurant');

exports.addRestaurant = async (req, res) => {

    try {
        const { name, addressId } = req.body;
        const newRestaurant = await restaurant.create({ name, addressId });

        res.status(200).json(
            {
                success: true,
                data: newRestaurant,
                message: "Restaurant added successfully",
            }
        );

    }
    catch (err) {
        console.log(`Some error occured while adding restaurant ${err}`);
    }
}

exports.getAllRestaurant = async (req, res) => {

    try {

        const item = await restaurant.find().populate('addressId').exec();

        res.json({
            item,
        });

    }
    catch (err) {
        console.log("Error while fetching restaurants" + err);
    }
}

exports.deleteRestaurant = async (req, res) => {
    try {
        fid = req.params.id;
        console.log(fid);
        const deleted = await restaurant.findByIdAndRemove(fid);
        res.status(200).json({
            success: true,
            data: deleted,
            message: "Restaurant deleted successfully",
        })

    }
    catch (err) {
        console.log(`An error occured while deleting Restaurant ${err}`);
    }
}

exports.updateRestaurantAddress = async (req, res) => {
    try {
        const id = req.param('id');
        const newId = req.body;
        const updated = await restaurant.findOneAndUpdate({ _id: id }, newId, { new: true });
        res.status(200).json({
            success: true,
            data: updated,
            message: "AddressId updated succesfully",
        })

    }
    catch (err) {
        console.log(`An error occured while updating address-id ${err}`);
    }
}