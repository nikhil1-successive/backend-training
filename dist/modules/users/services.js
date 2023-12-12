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
}
exports.RealEstateListingService = RealEstateListingService;
