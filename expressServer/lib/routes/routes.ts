import { Request, Response } from "express";
import { GoalController } from "../controllers/goalController";
import { UserController } from "../controllers/userController";

export class Routes {
    public goalController: GoalController = new GoalController();
    public userController: UserController = new UserController();
    
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

        //USERS

        app.route('/user')
            //get all users
            .get(this.userController.getUsers)
            //create a user
            .post(this.userController.addNewUser)

        app.route('/user/:userId')
            //get specific user
            .get(this.userController.getUserWithId)
            // Update a user
            .put(this.userController.updateUser)
            // Delete a user
            .delete(this.userController.deleteUser)
    }
}