const mongoose = require("mongoose");

const user = new mongoose.Schema(

    {

        firstName: {
            type: String,
            required: true,
        },
        
        lastName: {
            type: String,
            required: true

        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

        },
        password:{
            type:String,
            required : true,
            min:8
        },
        phoneNumber: {
            type: String,
            required: true,
            minlength: [10, 'Length Must be 10, got {VALUE}'],
            maxlength: [10, 'Length Must be 10, got {VALUE}']
        },
        addressidArray: [{
            type: mongoose.Schema.Types.ObjectId,

        }]

    }
)
module.exports = mongoose.model("User", user);2