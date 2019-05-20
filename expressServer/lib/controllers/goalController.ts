import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { GoalSchema } from '../models/goalModel';

const Goal = mongoose.model('Goal', GoalSchema);
mongoose.set('useFindAndModify', false);

export class GoalController {

    public addNewGoal(req: Request, res: Response) {
        let newGoal = new Goal(req.body);

        newGoal.save((err, goal) => {
            if (err) {
                res.send(err);
            }
            res.json(goal);
        });
    }

    public getGoals(req: Request, res: Response) {
        Goal.find({}, (err, goal) => {
            if (err) {
                res.send(err);
            }
            res.json(goal);
        });
    }

    public getGoalWithId(req: Request, res: Response) {
        Goal.findById(req.params.goalId, (err, goal) => {
            if (err) {
                res.send(err);
            }
            res.json(goal);
        });
    }

    public getGoalsWithTag(req:Request, res:Response){
        Goal.find({"tag": req.params.tag},(err,goals) =>{
            if(err){
                res.send(err);
            }
            res.json(goals);
        });
    }

    public getGoalsWithUserId(req:Request, res:Response){
        Goal.find({"userId": mongoose.Types.ObjectId.ObjectId(req.params.userId)},(err,goals) =>{
            if(err){
                res.send(err);
            }
            res.json(goals);
        });
    }

    public updateGoal(req: Request, res: Response) {
        Goal.findOneAndUpdate({ _id: req.params.goalId },
        req.body, 
        { new: true }, 
        (err, goal) => {
            if (err) {
                res.send(err);
            }
            res.json(goal);
        });
    }

    public deleteGoal(req: Request, res: Response) {           
        Goal.deleteOne({ _id: req.params.goalId }, 
            (err, goal) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted goal!'});
        });
    }
}