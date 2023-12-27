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
const services_1 = require("./services");
const realEstateService = new services_1.RealEstateListingService();
class RealEstateListingController {
    static getAllListings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listings = yield realEstateService.getAllListings();
                res.status(200).json(listings);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    static getListingById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const listing = yield realEstateService.getListingById(id);
                if (listing) {
                    res.status(200).json(listing);
                }
                else {
                    res.status(404).json({ message: 'Listing not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    static createListing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listingData = req.body;
            try {
                const newListing = yield realEstateService.createListing(listingData);
                res.status(201).json(newListing);
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    static updateListing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const listingData = req.body;
            try {
                const updatedListing = yield realEstateService.updateListing(id, listingData);
                if (updatedListing) {
                    res.status(200).json(updatedListing);
                }
                else {
                    res.status(404).json({ message: 'Listing not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
    static deleteListing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield realEstateService.deleteListing(id);
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    }
}
exports.default = RealEstateListingController;
