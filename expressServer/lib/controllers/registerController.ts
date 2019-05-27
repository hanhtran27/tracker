import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { TokenController } from './tokenController';

const User = mongoose.model('User', UserSchema);

export class RegisterController {

    public async register(req: Request, res:Response) {

        await User.find({'email': req.body.email}, (err, user) => {
            if (err) throw err;
            if (user.length > 0) {
                res.json({status: "Email already exists!"});  
            }
        });

        let user = new User(req.body);
        user.save((err: any, result: any) => {
            if (err) throw err;
            res.json({
                token: TokenController.generateToken(result.email,result.hash)
            });
        });
    }
}