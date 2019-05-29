export class Record {
    goalId: string;
    finishedUnits: Number;
    finishedDate: Date;

    constructor(goalId: string, finishedUnits: Number, finishedDate: Date) {
        this.goalId = goalId;
        this.finishedUnits = finishedUnits;
        this.finishedDate = finishedDate;
    }
}
