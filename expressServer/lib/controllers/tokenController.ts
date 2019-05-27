import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);

export class TokenController {

    // Read me: Email is included here bacause I want to assign goal created to
    // the user who is curently login. The user info will be taken out from this 
    // token. I can't think of any other way to match goal with certain user id
    // for now. If you could think of any, please feel free to modify the code.
    public static generateToken(email:string, hash:string):string {
        return email+"&"+hash;
    }

    public static getUserIdFromToken = async (token: string) => {
        let foundUser = new User();
        let split_token = token.split("&", 2);
        await User.findOne({"email":split_token[0]}, (err, user) => {
            if (err) throw err;
            foundUser = user;
        });
        return Promise.resolve(foundUser._id);
    };
}