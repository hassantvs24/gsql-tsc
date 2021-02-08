"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMutation = exports.TaskQuery = void 0;
var task_1 = require("../models/task");
var TaskQuery = {
    taskById: task_1.TaskTC.getResolver('findById'),
    taskByIds: task_1.TaskTC.getResolver('findByIds'),
    taskOne: task_1.TaskTC.getResolver('findOne'),
    taskMany: task_1.TaskTC.getResolver('findMany'),
    taskCount: task_1.TaskTC.getResolver('count'),
    taskConnection: task_1.TaskTC.getResolver('connection'),
    taskPagination: task_1.TaskTC.getResolver('pagination'),
};
exports.TaskQuery = TaskQuery;
var TaskMutation = {
    taskCreateOne: task_1.TaskTC.getResolver('createOne'),
    taskCreateMany: task_1.TaskTC.getResolver('createMany'),
    taskUpdateById: task_1.TaskTC.getResolver('updateById'),
    taskUpdateOne: task_1.TaskTC.getResolver('updateOne'),
    taskUpdateMany: task_1.TaskTC.getResolver('updateMany'),
    taskRemoveById: task_1.TaskTC.getResolver('removeById'),
    taskRemoveOne: task_1.TaskTC.getResolver('removeOne'),
    taskRemoveMany: task_1.TaskTC.getResolver('removeMany'),
};
exports.TaskMutation = TaskMutation;
