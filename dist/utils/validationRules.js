"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class RequestValidator {
    constructor(validationRules) {
        this.validationRules = validationRules;
    }
    validate(route) {
        return (req, res, next) => {
            if (!this.validationRules[route]) {
                return next();
            }
            const schema = joi_1.default.object(this.validationRules[route]);
            const { error } = schema.validate(req.body, { abortEarly: false });
            if (error) {
                const errorDetails = error.details.map((detail) => detail.message);
                res.status(422).json({ error: 'Validation error', details: errorDetails });
            }
            next();
        };
    }
}
const validationRules = {
    login: {
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().min(6).required(),
        username: joi_1.default.string().alphanum().min(3).max(30).required(),
    },
};
const requestValidator = new RequestValidator(validationRules);
exports.default = requestValidator.validate.bind(requestValidator);
