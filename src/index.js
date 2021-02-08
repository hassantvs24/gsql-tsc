"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var mongoose_1 = __importDefault(require("mongoose"));
require("./utils/db");
var schema_1 = __importDefault(require("./schema"));
dotenv_1.default.config();
var app = express_1.default();
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
});
server.applyMiddleware({
    app: app,
    path: '/',
    cors: true,
    onHealthCheck: function () {
        // eslint-disable-next-line no-undef
        return new Promise(function (resolve, reject) {
            if (mongoose_1.default.connection.readyState > 0) {
                resolve();
            }
            else {
                reject();
            }
        });
    },
});
app.listen({ port: process.env.PORT }, function () {
    console.log("Server listening on port " + process.env.PORT);
});
