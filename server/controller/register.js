const bcrypt = require('bcrypt');
var Register = require('../model/register');
exports.index = function (req, res) {
    Register.get(function (err, contacts) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

exports.register = function(req, res){
var register = new Register();
    register.fname = req.body.fname ? req.body.fname : register.fname;
    register.lname = req.body.lname ? req.body.lname : register.lname;
    register.email = req.body.email;
    register.password = bcrypt.hashSync(req.body.password, 10);
	// save the contact and check for errors
	// console.log(register);
    register.save(function (err) {
    	console.log('working');
        if (err)
        res.json(err);
		res.json({
            message: 'New contact created!',
            data: contact
        });
    });
}