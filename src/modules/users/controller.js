"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("./services");
const realEstateService = new services_1.RealEstateListingService();
class RealEstateListingController {
    static async getAllListings(req, res) {
        try {
            const listings = await realEstateService.getAllListings();
            res.status(200).json(listings);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async getListingById(req, res) {
        const { id } = req.params;
        try {
            const listing = await realEstateService.getListingById(id);
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
    }
    static async createListing(req, res) {
        const listingData = req.body;
        try {
            const newListing = await realEstateService.createListing(listingData);
            res.status(201).json(newListing);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async updateListing(req, res) {
        const { id } = req.params;
        const listingData = req.body;
        try {
            const updatedListing = await realEstateService.updateListing(id, listingData);
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
    }
    static async deleteListing(req, res) {
        const { id } = req.params;
        try {
            await realEstateService.deleteListing(id);
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async searchListingsByTitle(req, res) {
        const { title } = req.params;
        try {
            const listings = await realEstateService.searchListingsByTitle(title);
            res.status(200).json(listings);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async searchListingsByAddress(req, res) {
        const { address } = req.params;
        try {
            const listings = await realEstateService.searchListingsByAddress(address);
            res.status(200).json(listings);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async searchListingsByPrice(req, res) {
        const { price } = req.params;
        try {
            const listings = await realEstateService.searchListingsByPrice(price);
            res.status(200).json(listings);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.default = RealEstateListingController;
