"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
router.get('/listings', controller_1.default.getAllListings);
router.get('/listings/:id', controller_1.default.getListingById);
router.post('/listings', controller_1.default.createListing);
router.put('/listings/:id', controller_1.default.updateListing);
router.delete('/listings/:id', controller_1.default.deleteListing);
router.get('/listings/search/title/:title', controller_1.default.searchListingsByTitle);
router.get('/listings/search/address/:address', controller_1.default.searchListingsByAddress);
router.get('/listings/search/price/:price', controller_1.default.searchListingsByPrice);
exports.default = router;
