"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var recordModel_1 = require("../models/recordModel");
var Record = mongoose.model("Record", recordModel_1.RecordSchema);
var RecordController = /** @class */ (function () {
    function RecordController() {
    }
    RecordController.prototype.addNewRecord = function (req, res) {
        var newRecord = new Record(req.body);
        newRecord.save(function (err, record) {
            if (err) {
                res.send(err);
            }
            res.json(record);
        });
    };
    RecordController.prototype.getRecords = function (req, res) {
        Record.find({}, function (err, records) {
            if (err) {
                res.send(err);
            }
            res.json(records);
        });
    };
    RecordController.prototype.getRecordWithId = function (req, res) {
        Record.findById(req.params.goalId, function (err, record) {
            if (err) {
                res.send(err);
            }
            res.json(record);
        });
    };
    RecordController.prototype.getRecordsWithGoalId = function (req, res) {
        Record.findById(req.params.goalId, function (err, records) {
            if (err) {
                res.send(err);
            }
            res.json(records);
        });
    };
    RecordController.prototype.updateRecord = function (req, res) {
        Record.findOneAndUpdate({ _id: req.params.recordId }, req.body, { "new": true }, function (err, record) {
            if (err) {
                res.send(err);
            }
            res.json(record);
        });
    };
    RecordController.prototype.deleteRecord = function (req, res) {
        Record.remove({ _id: req.params.recordId }, function (err, record) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted goal!' });
        });
    };
    return RecordController;
}());
exports.RecordController = RecordController;