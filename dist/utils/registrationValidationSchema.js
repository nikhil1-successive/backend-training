"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateRegistration = (req, res, next) => {
    const userSchema = joi_1.default.object({
        username: joi_1.default.string().required(),
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(6).required(),
    });
    const validationResult = userSchema.validate(req.body, { abortEarly: false });
    if (validationResult.error) {
        const errors = validationResult.error.details.map((detail) => detail.message);
        return res.status(400).json({ errors });
    }
    next();
};
exports.default = validateRegistration;
