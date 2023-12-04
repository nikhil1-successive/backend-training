"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
const secretKey = "12";
const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return next((0, http_errors_1.default)(403, 'Please provide token'));
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return next((0, http_errors_1.default)(401, 'Unauthorized'));
        }
        req.user = decoded;
        next();
    });
};
exports.default = auth;
