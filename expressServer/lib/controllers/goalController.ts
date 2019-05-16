import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { GoalSchema } from '../models/goalModel';

const Goal = mongoose.model('Goal', GoalSchema);

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

    public updateGoal(req: Request, res: Response) {
        Goal.findOneAndUpdate({ _id: req.params.goalId },
        req.body, 
        { new: true }, //return modified document 
        (err, goal) => {
            if (err) {
                res.send(err);
            }
            res.json(goal);
        });
    }

    public deleteGoal(req: Request, res: Response) {           
        Goal.remove({ _id: req.params.goalId }, 
            (err, goal) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted goal!'});
        });
    }
}