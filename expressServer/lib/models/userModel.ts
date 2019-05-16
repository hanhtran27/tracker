import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

//todo: implement authentication
export const UserSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    salt: {type: String},
    hash: {type: String}
});
