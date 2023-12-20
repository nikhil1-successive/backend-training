"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class LocationMiddleware {
    processRequest(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clientIP = req.ip;
                const response = yield axios_1.default.get(`https://ipinfo.io/${clientIP}/json`);
                const { country } = response.data;
                if (country !== 'India') {
                    res.status(403).json({
                        error: 'Access denied.',
                    });
                }
                next();
            }
            catch (error) {
                console.error(error);
                res.status(500).json({
                    error: 'Error',
                });
            }
        });
    }
}
exports.default = LocationMiddleware;
