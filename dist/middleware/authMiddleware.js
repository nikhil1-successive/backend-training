"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_errors_1 = __importDefault(require("http-errors"));
class AuthMiddleware {
    constructor(secretKey) {
        //authneticate method
        this.authenticate = (req, res, next) => {
            const token = req.headers['authorization'];
            if (!token) {
                next((0, http_errors_1.default)(403, 'Please provide token'));
                return;
            }
            jsonwebtoken_1.default.verify(token, this.secretKey, (err, decodeUser) => {
                if (err) {
                    next((0, http_errors_1.default)(401, 'Unauthorized'));
                    return;
                }
                next();
            });
        };
        this.secretKey = secretKey;
        this.authenticate = this.authenticate.bind(this);
    }
}
exports.default = AuthMiddleware;
