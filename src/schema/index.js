"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_compose_1 = require("graphql-compose");
var schemaComposer = new graphql_compose_1.SchemaComposer();
var user_1 = require("./user");
var task_1 = require("./task");
schemaComposer.Query.addFields(__assign(__assign({}, user_1.UserQuery), task_1.TaskQuery));
schemaComposer.Mutation.addFields(__assign(__assign({}, user_1.UserMutation), task_1.TaskMutation));
exports.default = schemaComposer.buildSchema();
