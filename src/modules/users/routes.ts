import express, { Router } from 'express';
import RealEstateListingController from './controller';
import {
  validateCreateListing,
  validateUpdateListing,
  validateGetListingById,
} from './validation';

const router = Router();
const realEstateListingController = new RealEstateListingController();

router.post('/listings', async (req, res) => {
  await realEstateListingController.createRealEstateListing(req, res);
});


router.get('/listings', async (req, res) => {
  await realEstateListingController.getRealEstateListings(req, res);
});


router.put('/listings/:listingId', async (req, res) => {
  await realEstateListingController.updateRealEstateListing(req, res);
});


router.get('/listings/:listingId', async (req, res) => {
  await realEstateListingController.getRealEstateListingById(req, res);
});

router.delete('/listings/:listingId', async (req, res) => {
  await realEstateListingController.deleteRealEstateListing(req, res);
});

export default router;
