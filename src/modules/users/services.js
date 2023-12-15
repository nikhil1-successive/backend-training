"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingService = void 0;
const Repository_1 = require("./repositories/Repository");
class RealEstateListingService {
    constructor() {
        this.repository = new Repository_1.RealEstateListingRepository();
    }
    async getAllListings() {
        return this.repository.findAll();
    }
    async getListingById(id) {
        return this.repository.findById(id);
    }
    async createListing(data) {
        return this.repository.create(data);
    }
    async updateListing(id, data) {
        return this.repository.update(id, data);
    }
    async deleteListing(id) {
        this.repository.delete(id);
    }
    async searchListingsByTitle(title) {
        return this.repository.findByTitle(title);
    }
    async searchListingsByAddress(address) {
        return this.repository.findByAddress(address);
    }
    async searchListingsByPrice(price) {
        return this.repository.findByPrice(price);
    }
}
exports.RealEstateListingService = RealEstateListingService;
