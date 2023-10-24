// const { genSalt } = require('bcrypt');
const user = require('../models/user');
const bcrypt = require('bcrypt');

// exports.signup = async (req, res) => {

//     try {
//         let { firstName, lastName, email, password, phoneNumber } = req.body;
//         // const salt = bcrypt.genSalt(10);

//         bcrypt.hash(password, 10).then(async hashed => {

//             password = hashed;
//             const newUser = await user.create({ firstName, lastName, email, password, phoneNumber });



//             res.status(200).json(
//                 {
//                     success: true,
//                     data: newUser,
//                     message: "User added successfully",

//                 }
//             );
//         });

//     }
//     catch (err) {
//         console.log(`Some error occured while adding user ${err}`);
//     }
// }

exports.getInfo = async (req, res) => {
    try {

        const name = req.body.firstName;
        const found = user.find({ firstName: name });
        if (!found) {

            res.json({

                data: found
            })
        }
        else {
            res.json({
                success: true,
                // data:found,
            });
        }
    }
    catch (error) {
    }
}
exports.getAllUser = async (req, res) => {

    try {

        const item = await user.find().populate('addressidArray').exec();


        res.json({
            data: item,
        });

    }
    catch (err) {
        console.log("Error while fetching users" + err);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        fid = req.params.id;
        console.log(fid);
        const deleted = await user.findByIdAndRemove(fid);
        res.status(200).json({
            success: true,
            data: deleted,
            message: "User deleted successfully",
        })

    }
    catch (err) {
        console.log(`An error occured while deleting User ${err}`);
    }
}

exports.updateProfile = async (req, res) => {
    try {
        const id = req.param('id');
        const newProfile = req.body;
        const updated = await user.findOneAndUpdate({ _id: id }, newProfile, { new: true });
        res.status(200).json({
            success: true,
            data: updated,
            message: "Profile updated succesfully",
        })

    }
    catch (err) {
        console.log(`An error occured while updating profile ${err}`);
    }

}