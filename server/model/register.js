var mongoose = require('mongoose');

var registerSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true 
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }   
});
var Register = module.exports = mongoose.model('registration', registerSchema);
module.exports.get = function (callback, limit) {
    Register.find(callback).limit(limit);
}