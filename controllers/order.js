const order = require('../models/order')
const jwt = require('jsonwebtoken')

require('dotenv').config();

exports.getCart = async (req, res) => {
    try {

        const decoded = jwt.verify(req.cookies['access_token'], process.env.JWT_SECRET);
        // console.log(decoded)
        const existingCart = await order.find({
            email: decoded.email
        });
        console.log(existingCart)
        if (existingCart.length <= 0) {
            res.status(404).json({
                success: false,
                messege: "Cart is empty"
            })
        }
        else {
            res.status(200).json({
                success: true,
                data: existingCart.orderItemId
            })
        }


    }
    catch (err) {
        console.log(`An error occured while fetching cart ${err}`);
    }
}
exports.addToCart = async (req, res) => {
    try {
        const decoded = jwt.verify(req.cookies['access_token'], process.env.JWT_SECRET);
        // console.log(decoded)
        const existingCart = await order.find({
            email: decoded.email
        });
        console.log(existingCart)
        if (existingCart.length <= 0) {

        }
        else {
            const newCart = await order.findOneAndUpdate({
                email: decoded.email
            }, {
                orderItemId: [...req.params.id]
            })
            res.status(200).json({
                success: true,
                data: existingCart.orderItemId
            })
            res.status(200).
                json(
                    {
                        success: true
                    }

                )
        }

    }
    catch (err) {
        console.log(`An error occured while deleting food item ${err}`);
    }
}