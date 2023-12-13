"use strict";
// import express, { Router } from 'express';
// import RealEstateListingController from './controller';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// const router = Router();
// const realEstateListingController = new RealEstateListingController();
// router.post('/listings', async (req, res) => {
//   await realEstateListingController.createRealEstateListing(req, res);
// });
// router.get('/listings', async (req, res) => {
//   await realEstateListingController.getRealEstateListings(req, res);
// });
// router.put('/listings/:listingId', async (req, res) => {
//   await realEstateListingController.updateRealEstateListing(req, res);
// });
// router.get('/listings/:listingId', async (req, res) => {
//   await realEstateListingController.getRealEstateListingById(req, res);
// });
// router.delete('/listings/:listingId', async (req, res) => {
//   await realEstateListingController.deleteRealEstateListing(req, res);
// });
// export default router;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controller_1 = __importDefault(require("./controller"));
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
const User = mongoose_1.default.model('User', userSchema);
const router = (0, express_1.Router)();
const realEstateListingController = new controller_1.default();
// Validation middleware for signup
const signupValidationRules = [
    (0, express_validator_1.body)('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];
// Middleware for signup validation on POST /listings
const validateSignupMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
// POST /listings route with signup validation and bcrypt for password hashing
router.post('/listings', signupValidationRules, validateSignupMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.createRealEstateListing(req, res);
}));
router.put('/listings/:listingId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.updateRealEstateListing(req, res);
}));
router.get('/listings/:listingId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingById(req, res);
}));
router.delete('/listings/:listingId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.deleteRealEstateListing(req, res);
}));
router.get('/listings/title/:title', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByTitle(req, res);
}));
router.get('/listings/address/:address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByAddress(req, res);
}));
router.get('/listings/price/:price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByPrice(req, res);
}));
router.get('/listings/bathrooms/:bathrooms', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByBathrooms(req, res);
}));
router.get('/listings/areaSquareFeet/:areaSquareFeet', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByAreaSquareFeet(req, res);
}));
exports.default = router;
