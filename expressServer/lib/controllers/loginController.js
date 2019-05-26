"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var userModel = require("../models/userModel");
var User = mongoose.model('User', userModel.UserSchema);

var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.login = function (req, res) {
        console.log(req.body)
        User.find(
            {'email':req.body.email, 'hash':req.body.hash},
            (err, goal) => {
                if (err) throw (err);
                if (goal.length != 0) {
                    let token = req.body.email + req.body.hash + mongoose.Schema.Types.ObjectId;
                    res.json({status: true, token: token});
                } else {
                    res.json({status: false});        
                } 
            });
    };

    return LoginController;
}());
exports.LoginController = LoginController;
