let mongoose = require('mongoose')
let validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

let schema = mongoose.Schema({
    Name: {
        type: String,
        minlength: 3
    },
    Email: {
        type: String,

        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email Id");
            }
        }
    },

    Password: {
        type: String,
        minlength: 8
    },

    Phone: {
        type: Number,
        min: 10
    },

    Message: {
        type: String,
        maxlength: 150

    }
})


let User = mongoose.model('User', schema)

module.exports = User;