"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
// Get all listings
router.get('/listings', controller_1.default.getAllListings);
// Get a listing by ID
router.get('/listings/:id', controller_1.default.getListingById);
// Create a new listing
router.post('/listings', controller_1.default.createListing);
// Update a listing by ID
router.put('/listings/:id', controller_1.default.updateListing);
// Delete a listing by ID
router.delete('/listings/:id', controller_1.default.deleteListing);
// Search listings by title
router.get('/listings/search/title/:title', controller_1.default.searchListingsByTitle);
// Search listings by address
router.get('/listings/search/address/:address', controller_1.default.searchListingsByAddress);
// Search listings by price
router.get('/listings/search/price/:price', controller_1.default.searchListingsByPrice);
exports.default = router;
