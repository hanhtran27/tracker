import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GoalSchema = new Schema({
    isTask: {type: Boolean},
    goalName: {type: String},
    goalDescription: {type: String},
    tag: {type: String},
    totalUnit: {type: Number},
    unitName: {type: String},
    startDate: {type: Date},
    length: {type: Number},
    frequency: {type: Number},
    timePeriod: {type: String}
});
