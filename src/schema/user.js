"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMutation = exports.UserQuery = void 0;
var user_1 = require("../models/user");
var UserQuery = {
    userById: user_1.UserTC.getResolver('findById'),
    userByIds: user_1.UserTC.getResolver('findByIds'),
    userOne: user_1.UserTC.getResolver('findOne'),
    userMany: user_1.UserTC.getResolver('findMany'),
    userCount: user_1.UserTC.getResolver('count'),
    userConnection: user_1.UserTC.getResolver('connection'),
    userPagination: user_1.UserTC.getResolver('pagination'),
};
exports.UserQuery = UserQuery;
var UserMutation = {
    userCreateOne: user_1.UserTC.getResolver('createOne'),
    userCreateMany: user_1.UserTC.getResolver('createMany'),
    userUpdateById: user_1.UserTC.getResolver('updateById'),
    userUpdateOne: user_1.UserTC.getResolver('updateOne'),
    userUpdateMany: user_1.UserTC.getResolver('updateMany'),
    userRemoveById: user_1.UserTC.getResolver('removeById'),
    userRemoveOne: user_1.UserTC.getResolver('removeOne'),
    userRemoveMany: user_1.UserTC.getResolver('removeMany'),
};
exports.UserMutation = UserMutation;
