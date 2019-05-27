import * as mongoose from 'mongoose';
import { Request, Response } from 'express';
import { GoalSchema } from '../models/goalModel';
import { TokenController } from './tokenController';

const Goal = mongoose.model('Goal', GoalSchema);
mongoose.set('useFindAndModify', false);

export class GoalController {

    public async addNewGoal(req: Request, res: Response) {
        let userId:string;
        //get userid out to add to goal
        await TokenController.getUserIdFromToken(req.header('authorization')).then((result) => {
            userId = result;
        });

        //add goal for the curently login user
        let newGoal = new Goal ({userId: userId,
                        goalName: req.body.goalName,
                        tag:req.body.tag,
                        goalNumber: req.body.goalNumber,
                        goalUnit: req.body.goalUnit,
                        startDate: req.body.startDate,
                        dueDate: req.body.dueDate});

        newGoal.save((err, goal) => {
            if (err) {
                res.send(err);
            }
            res.json(goal);
        });

        console.log("new goal created: "+req.body.goalName);
    }

    public async getGoals(req: Request, res: Response) {
        let userId:string;

        await TokenController.getUserIdFromToken(req.header('authorization')).then((result) => {
            userId = result;
        });
        //return goals of the curently login user
        Goal.find({userId:userId}, (err, goal) => {
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
        Goal.find({"userId": mongoose.Types.ObjectId(req.params.userId)},(err,goals) =>{
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
            (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted goal!'});
        });
    }
}