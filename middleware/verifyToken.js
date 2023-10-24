const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = async (req, res, next) => {
    console.log(req.cookies['access_token']);

    if (req.cookies['access_token'] ) {

        const token = req.cookies['access_token'];
        // console.log(token)
        const isavail = jwt.verify(token, process.env.JWT_SECRET);
        if (isavail) {
            console.log("Token verified")
            next();

        }
        else {
            console.log("Invalid Token")
        }
    }
    else {
        res.json({
            success: false,
            message: "Token not found",
        })
    }

}

