const user = require("../models/user");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.signUp = async (req, res) => {
    try {

        let { firstName, lastName, email, password, phoneNumber } = req.body;
        const exist = await user.find({ email: req.body.email });
        // console.log(exist)
        if (exist.length > 0) {

            res.status(400).json({
                success: false,
                message: "User already exist with this email"
            });
        }
        else {
            password = await bcrypt.hash(password, 10);
            const newUser = await user.create({
                firstName, lastName, email,
                password, phoneNumber
            });

            res.status(200).json({
                sucess: true,
                data: newUser,
                messege: "User created successfully",
            });
        }
    }
    catch (error) {
        console.log(`Some error occured while siging up ${error}`);
    }

}


exports.logIn = async (req, res) => {
    try {
        const alreadyLogged = req.cookies['access_token'];
        console.log(alreadyLogged);

        if (alreadyLogged) {
            console.log("User is already logged in");
            return res.cookie("access_token", alreadyLogged, {
                httpOnly: true,
                secure: false,
            }).json({
                messege: "User is already logged in",
                cookie: alreadyLogged
            })

        }
        const { email, password } = req.body;
        const exist = await user.find({ email: email });
        if (!exist) {
            res.status(400).json({
                success: false,
                message: "User doesn't exist with this email"
            });
            process.exit(1);
        }
        const originalPassword = exist[0].password;
        const verifyPassword = await bcrypt.compare(password, originalPassword);
        console.log(verifyPassword);
        if (!verifyPassword) {
            console.log("Password is wrong. Please try again..");
            // process.exit(1);
            res.status(401).json({
                success: false,
                message: "Password is incorrect please try again"
            })

        }
        else {
            console.log("Password is correct")
            const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '10s' });


            res.cookie("access_token", token, {
                httpOnly: true,
                secure: false,
            }).status(200).json({
                sucess: true,
                data: exist,
                token: token,
                messege: "Logged-In successfully",
            });
        }
    }
    catch (error) {
        console.log(`Some error occured while loging in ${error}`);
    }
}

exports.logOut = async (req, res) => {
    try {
        res.clearCookie('access_token');
        res.json(req.cookies)

    }
    catch {
        console.log("Enable to clear cookies")
        res.json({
            error: "enable to clear cookies"
        })
    }

}