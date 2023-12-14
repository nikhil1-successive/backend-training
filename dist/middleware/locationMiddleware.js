"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const locationMiddleware = async (req, res, next) => {
    try {
        const clientIP = req.ip;
        const response = await axios_1.default.get(`https://ipinfo.io/${clientIP}/json`);
        const { country } = response.data;
        if (country !== "India") {
            return res.status(403).json({
                error: 'Access denied.',
            });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({
            error: 'Error',
        });
    }
};
exports.default = locationMiddleware;
