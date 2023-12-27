import express from 'express';
import RealEstateListingController from './Controller';

const routers = express.Router();

routers.get('/listings', RealEstateListingController.getAllListings);
routers.get('/listings/:id', RealEstateListingController.getListingById);
routers.post('/listings', RealEstateListingController.createListing);
routers.put('/listings/:id', RealEstateListingController.updateListing);
routers.delete('/listings/:id', RealEstateListingController.deleteListing);

export default routers;
