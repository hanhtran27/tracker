import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { UserSchema } from 'models/userModel';

const User = mongoose.model('User', UserSchema);

export class RegisterController {

    public async register(req: Request, res:Response) {
        console.log("Registerin ...")

        await User.find({'email': req.body.email}, (err, user) => {
            res.json({status: "Invalid"});
        });

        let user = User(req.body);
        user.save((err: any, result: any) => {
            if (err) throw err;
            res.json({
                firstName: user.firstName,
                lastName: user.lastName,
                userName: user.userName,
                email: user.email,
                token: user.userName + user.password
            });
        });
    }
}