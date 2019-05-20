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
            {'userName':req.body.userName, 'hashabcxyz':req.body.hash},
            (err, goal) => {
                if (err) throw (err);
                if (goal.length != 0) {
                    let token = req.body.userName + req.body.hash;
                    res.json({status: true, token: token});
                } else {
                    res.json({status: false});        
                } 
            });
    };

    return LoginController;
}());
exports.LoginController = LoginController;
