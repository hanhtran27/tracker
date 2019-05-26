"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var userModel = require("../models/userModel");
var User = mongoose.model('User', userModel.UserSchema);


var RegisterController = /** @class */ (function () {
    function RegisterController() {}

    RegisterController.prototype.register = async function (req, res) {

        await User.find({'email': req.body.email}, (err, user) => {
            if (err) throw err;
            if (user.length > 0) {
                res.json({status: "Invalid"});
            }
        });

        let user = User(req.body);
        user.save((err, data) => {
            if (err) throw err;
            res.json({
                token: user.userName + user.hash
            });
        });
    }
    return RegisterController;
}());
exports.RegisterController = RegisterController;