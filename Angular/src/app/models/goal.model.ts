export class Goal {
    userId: string;
    goalName: string;
    tag: string;
    goalNumber: Number;
    goalUnit: string;
    startDate: Date;
    dueDate: Date;
    _id: string;

    constructor(goalName: string, tag: string, goalNumber: Number, goalUnit: string, startDate: Date, dueDate: Date, goalId?: string) {
        this.goalName = goalName;
        this.tag = tag;
        this.goalNumber = goalNumber;
        this.goalUnit = goalUnit;
        this.startDate = startDate;
        this.dueDate = dueDate;
        if(goalId){
            this._id = goalId;
        }
    }
}
