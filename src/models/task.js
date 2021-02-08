"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTC = exports.Task = exports.TaskSchema = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var mongoose_timestamp_1 = __importDefault(require("mongoose-timestamp"));
var graphql_compose_mongoose_1 = require("graphql-compose-mongoose");
exports.TaskSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    task: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
}, {
    collection: 'tasks',
});
exports.TaskSchema.plugin(mongoose_timestamp_1.default);
exports.TaskSchema.index({ createdAt: 1, updatedAt: 1 });
exports.Task = mongoose_1.default.model('Task', exports.TaskSchema);
exports.TaskTC = graphql_compose_mongoose_1.composeWithMongoose(exports.Task);
