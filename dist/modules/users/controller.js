"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingController = void 0;
const services_1 = require("./services");
class RealEstateListingController {
    constructor() {
        this.realEstateListingService = new services_1.RealEstateListingService();
    }
    createRealEstateListing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newListing = yield this.realEstateListingService.createRealEstateListing(req.body);
                res.status(201).json(newListing);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to create real estate listing' });
            }
        });
    }
    getRealEstateListings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listings = yield this.realEstateListingService.getRealEstateListings();
                res.json(listings);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings' });
            }
        });
    }
    updateRealEstateListing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listingId = req.params.listingId;
            try {
                const updatedListing = yield this.realEstateListingService.updateRealEstateListing(listingId, req.body);
                if (updatedListing) {
                    res.json(updatedListing);
                }
                else {
                    res.status(404).json({ error: 'Real Estate Listing not found' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to update real estate listing' });
            }
        });
    }
    getRealEstateListingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listingId = req.params.listingId;
            try {
                const listing = yield this.realEstateListingService.getRealEstateListingById(listingId);
                if (listing) {
                    res.json(listing);
                }
                else {
                    res.status(404).json({ error: 'Real Estate Listing not found' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listing by ID' });
            }
        });
    }
    deleteRealEstateListing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listingId = req.params.listingId;
            try {
                const deletedListing = yield this.realEstateListingService.deleteRealEstateListing(listingId);
                if (deletedListing) {
                    res.json(deletedListing);
                }
                else {
                    res.status(404).json({ error: 'Real Estate Listing not found' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to delete real estate listing' });
            }
        });
    }
    getRealEstateListingsByTitle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const title = req.params.title;
            try {
                const listings = yield this.realEstateListingService.getRealEstateListingsByTitle(title);
                res.json(listings);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by title' });
            }
        });
    }
    getRealEstateListingsByAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = req.params.address;
            try {
                const listings = yield this.realEstateListingService.getRealEstateListingsByAddress(address);
                res.json(listings);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by address' });
            }
        });
    }
    getRealEstateListingsByPrice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const price = parseFloat(req.params.price);
            try {
                const listings = yield this.realEstateListingService.getRealEstateListingsByPrice(price);
                res.json(listings);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by price' });
            }
        });
    }
    getRealEstateListingsByBathrooms(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bathrooms = Number(req.params.bathrooms);
            try {
                const listings = yield this.realEstateListingService.getRealEstateListingsByBathrooms(bathrooms);
                res.json(listings);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by bathrooms' });
            }
        });
    }
    getRealEstateListingsByAreaSquareFeet(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const areaSquareFeet = parseFloat(req.params.areaSquareFeet);
            try {
                const listings = yield this.realEstateListingService.getRealEstateListingsByAreaSquareFeet(areaSquareFeet);
                res.json(listings);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by areaSquareFeet' });
            }
        });
    }
}
exports.RealEstateListingController = RealEstateListingController;
exports.default = RealEstateListingController;
