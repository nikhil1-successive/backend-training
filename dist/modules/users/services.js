"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingService = void 0;
const Model_1 = require("./repositories/Model");
class RealEstateListingService {
    getRealEstateListings() {
        return Model_1.RealEstateListingModel.find({});
    }
    getRealEstateListingById(listingId) {
        return Model_1.RealEstateListingModel.findById(listingId);
    }
    createRealEstateListing(listingData) {
        return Model_1.RealEstateListingModel.create(listingData);
    }
    updateRealEstateListing(listingId, listingData) {
        return Model_1.RealEstateListingModel.findByIdAndUpdate(listingId, listingData, { new: true });
    }
    deleteRealEstateListing(listingId) {
        return Model_1.RealEstateListingModel.findByIdAndDelete(listingId);
    }
    getRealEstateListingsByTitle(title) {
        return Model_1.RealEstateListingModel.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
    }
    getRealEstateListingsByAddress(address) {
        return Model_1.RealEstateListingModel.find({ address: { $regex: new RegExp(address, 'i') } }).exec();
    }
    getRealEstateListingsByPrice(price) {
        return Model_1.RealEstateListingModel.find({ price: { $eq: price } }).exec();
    }
    getRealEstateListingsByBathrooms(bathrooms) {
        return Model_1.RealEstateListingModel.find({ bathrooms: { $eq: bathrooms } }).exec();
    }
    getRealEstateListingsByAreaSquareFeet(areaSquareFeet) {
        return Model_1.RealEstateListingModel.find({ areaSquareFeet: { $eq: areaSquareFeet } }).exec();
    }
}
exports.RealEstateListingService = RealEstateListingService;
