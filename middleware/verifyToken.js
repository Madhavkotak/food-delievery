const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = async (req, res, next) => {
    // console.log(req.cookies['access_token']);
    // try {


    if (req.cookies['access_token']) {

        var dateNow = new Date();
        const decodedToken = jwt.decode(req.cookies['access_token']);
        console.log(decodedToken.exp)
        console.log(dateNow.getTime() / 1000)


        if (decodedToken.exp < dateNow.getTime() / 1000) {
            return res.json(
                {
                    success: false,
                    messege: "Token expired"
                }).clearCookie;
        }

        const token = req.cookies['access_token'];
        const isavail = jwt.verify(token, process.env.JWT_SECRET);
        if (isavail) {
            console.log("Token verified")
            next();
        }
        else {
            res.json({
                success: false,
                message: "Invalid token",
            })
        }
    }
    else {
        res.json({
            success: false,
            message: "Token not found",
        })
    }
    // }
    // catch {
    //     console.log("cathced");
    //     res.json({
    //         success: false,
    //         message: "Invalid token",
    //     })

    // }

}

