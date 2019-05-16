import { Request, Response } from "express";
import { GoalController } from "../controllers/goalController";

export class Routes {
    public goalController: GoalController = new GoalController();
    public routes(app): void {

        //GOALS

        app.route('/goal')
            //get all goals
            .get(this.goalController.getGoals)
            //create a goal
            .post(this.goalController.addNewGoal)

        app.route('/goal/:goalId')
            //get specific goal
            .get(this.goalController.getGoalWithId)
            // Update a goal  
            .put(this.goalController.updateGoal)
            // Delete a goal 
            .delete(this.goalController.deleteGoal)
    }
}