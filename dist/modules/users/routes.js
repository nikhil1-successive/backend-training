"use strict";
// import express, { Router } from 'express';
// import RealEstateListingController from './controller';
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
// interface IUser extends Document {
//   username: string;
//   password: string;
// }
// const userSchema = new Schema<IUser>({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });
// // Validation middleware for signup
// const signupValidationRules = [
//   body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
// ];
// // Middleware for signup validation on POST /listings
// const validateSignupMiddleware = (req: Request, res: Response, next: NextFunction) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }
//   next();
// };
// router.post('/listings', signupValidationRules, validateSignupMiddleware, async (req: Request, res: Response) => {
//   await realEstateListingController.createRealEstateListing(req, res);
// });
// const User = mongoose.model<IUser>('User', userSchema);
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = (0, express_1.Router)();
const realEstateListingController = new controller_1.default();
router.post('/listings', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
router.delete('/listings/:listingId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.deleteRealEstateListing(req, res);
}));
router.get('/listings/address/:address', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByAddress(req, res);
}));
router.get('/listings/price/:price', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield realEstateListingController.getRealEstateListingsByPrice(req, res);
}));
exports.default = router;
// router.get('/listings/bathrooms/:bathrooms', async (req: Request, res: Response) => {
//   await realEstateListingController.getRealEstateListingsByBathrooms(req, res);
// });
// router.get('/listings/areaSquareFeet/:areaSquareFeet', async (req: Request, res: Response) => {
//   await realEstateListingController.getRealEstateListingsByAreaSquareFeet(req, res);
// });
// router.get('/listings', async (req, res) => {
//   const { price, bathrooms, areaSquareFeet } = req.query;
//   if (price) {
//     await realEstateListingController.getRealEstateListingsByPrice(req, res);
//   } else if (bathrooms) {
//     await realEstateListingController.getRealEstateListingsByBathrooms(req, res);
//   } else if (areaSquareFeet) {
//     await realEstateListingController.getRealEstateListingsByAreaSquareFeet(req, res);
//   } else {
//     res.status(400).json({ error: 'No filter provided' });
//   }
// });
