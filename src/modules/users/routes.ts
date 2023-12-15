import express from 'express';
import RealEstateListingController from './controller';

const router = express.Router();

router.get('/listings', RealEstateListingController.getAllListings);

router.get('/listings/:id', RealEstateListingController.getListingById);

router.post('/listings', RealEstateListingController.createListing);

router.put('/listings/:id', RealEstateListingController.updateListing);

router.delete('/listings/:id', RealEstateListingController.deleteListing);

router.get('/listings/search/title/:title', RealEstateListingController.searchListingsByTitle);

router.get('/listings/search/address/:address', RealEstateListingController.searchListingsByAddress);

router.get('/listings/search/price/:price', RealEstateListingController.searchListingsByPrice);

export default router;
