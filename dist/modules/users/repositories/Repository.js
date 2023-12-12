"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingRepository = void 0;
const Model_1 = require("./Model");
class RealEstateListingRepository {
    getAllListings() {
        return Model_1.RealEstateListingModel.find({});
    }
    getListingById(listingId) {
        return Model_1.RealEstateListingModel.findById(listingId);
    }
    createListing(listingData) {
        return Model_1.RealEstateListingModel.create(listingData);
    }
    updateListing(listingId, listingData) {
        return Model_1.RealEstateListingModel.findByIdAndUpdate(listingId, listingData, { new: true });
    }
    deleteListing(listingId) {
        return Model_1.RealEstateListingModel.findByIdAndDelete(listingId);
    }
}
exports.RealEstateListingRepository = RealEstateListingRepository;
