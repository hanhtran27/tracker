"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    email: { type: String },
    hash: { type: String }
});
