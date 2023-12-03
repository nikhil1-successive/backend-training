"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware2 = exports.middleware1 = void 0;
const middleware1 = (req, res, next) => {
    console.log("Middleware1");
    next();
};
exports.middleware1 = middleware1;
const middleware2 = (req, res, next) => {
    console.log("Middleware2");
    next();
};
exports.middleware2 = middleware2;
