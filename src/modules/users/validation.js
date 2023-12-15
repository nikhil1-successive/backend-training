"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGetListingById = exports.validateUpdateListing = exports.validateCreateListing = void 0;
const express_validator_1 = require("express-validator");
exports.validateCreateListing = [
    (0, express_validator_1.body)('title').notEmpty().withMessage('Title is required'),
    (0, express_validator_1.body)('price').isNumeric().withMessage('Price must be a number'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
exports.validateUpdateListing = [
    (0, express_validator_1.param)('listingId').isMongoId().withMessage('Invalid listing ID'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
exports.validateGetListingById = [
    (0, express_validator_1.param)('listingId').isMongoId().withMessage('Invalid listing ID'),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
