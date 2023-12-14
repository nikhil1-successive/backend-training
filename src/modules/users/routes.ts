// import express, { Router } from 'express';
// import RealEstateListingController from './controller';

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
import express, { Router, Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import RealEstateListingController from './controller';
import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);
const router = Router();
const realEstateListingController = new RealEstateListingController();

// Validation middleware for signup
const signupValidationRules = [
  body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

// Middleware for signup validation on POST /listings
const validateSignupMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};


router.post('/listings', signupValidationRules, validateSignupMiddleware, async (req: Request, res: Response) => {
  await realEstateListingController.createRealEstateListing(req, res);
});

router.put('/listings/:listingId', async (req: Request, res: Response) => {
  await realEstateListingController.updateRealEstateListing(req, res);
});

router.get('/listings/:listingId', async (req: Request, res: Response) => {
  await realEstateListingController.getRealEstateListingById(req, res);
});

router.delete('/listings/:listingId', async (req: Request, res: Response) => {
  await realEstateListingController.deleteRealEstateListing(req, res);
});
router.get('/listings/title/:title', async (req: Request, res: Response) => {
  await realEstateListingController.getRealEstateListingsByTitle(req, res);
});

router.get('/listings/address/:address', async (req: Request, res: Response) => {
  await realEstateListingController.getRealEstateListingsByAddress(req, res);
});

router.get('/listings/price/:price', async (req: Request, res: Response) => {
  await realEstateListingController.getRealEstateListingsByPrice(req, res);
});

router.get('/listings/bathrooms/:bathrooms', async (req: Request, res: Response) => {
  await realEstateListingController.getRealEstateListingsByBathrooms(req, res);
});

router.get('/listings/areaSquareFeet/:areaSquareFeet', async (req: Request, res: Response) => {
  await realEstateListingController.getRealEstateListingsByAreaSquareFeet(req, res);
});
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


export default router;
