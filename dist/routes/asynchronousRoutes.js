"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncFunc = exports.asyncHandler = void 0;
const asyncFunc = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(text), 1000);
    });
};
exports.asyncFunc = asyncFunc;
const asyncHandler = (fun) => (req, res, next) => {
    Promise.resolve(fun(req, res, next)).catch((error) => {
        next(error);
    });
};
exports.asyncHandler = asyncHandler;
