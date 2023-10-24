const address = require('../models/address');


exports.addAddress = async (req, res) => {
    try {
        const { addressLine1, addressLine2, pincode } = req.body;

        const response = await address.create({ addressLine1, addressLine2, pincode });

        res.status(200).json(
            {
                success: true,
                data: response,
                messege: 'Entry of address successful'
            }
        )
    }
    catch (err) {
        console.log(`Some error occured while adding address ${err}`);
    }
}

exports.getAllAddress = async (req, res) => {
    try {
        const myaddress = await address.find();
        // res.send(address);
        res.status(200).json(
            {
                success: true,
                data: myaddress,
                messege: 'Fetching of address successful'
            }
        )
    }
    catch (err) {
        console.log(`Some error occured while fetching address ${err}`);
    }
}

exports.deleteAddress = async (req, res) => {
    try {
        id = req.params.id;
        const deleted = await address.findByIdAndRemove(id);
        res.status(200).json({
            success: true,
            data: deleted,
            message: "Address deleted successfully",
        })

    }
    catch (err) {
        console.log(`An error occured while deleting address ${err}`);
    }
}

exports.updateAddress = async (req, res) => {
    try {
        const id = req.param('id');
        const newAddress = req.body;
        const updated = await address.findOneAndUpdate({ _id: id }, newAddress, { new: true });
        res.status(200).json({
            success: true,
            data: updated,
            message: "Address updated succesfully",
        })

    }
    catch (err) {
        console.log(`An error occured while updating address ${err}`);
    }
}

