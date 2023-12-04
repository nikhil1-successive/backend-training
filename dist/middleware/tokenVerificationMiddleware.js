"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "123";
const tokenVerificationMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token Missing.' });
    }
    try {
        const decodeUser = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decodeUser;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: 'Token Invalid.' });
    }
};
exports.default = tokenVerificationMiddleware;
