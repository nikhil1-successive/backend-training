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
        return next((0, http_errors_1.default)(403, 'Please provide a token'));
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.error('JWT Verification Error:', err);
            return next((0, http_errors_1.default)(401, 'Unauthorized'));
        }
        const decodedToken = decoded;
        req.user = decodedToken;
        next();
    });
};
exports.default = auth;
