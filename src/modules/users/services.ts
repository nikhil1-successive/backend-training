import { RealEstateListingModel } from './repositories/Model';

export class RealEstateListingService {
  getRealEstateListings() {
    return RealEstateListingModel.find({});
  }

  getRealEstateListingById(listingId: string) {
    return RealEstateListingModel.findById(listingId);
  }

  createRealEstateListing(listingData: any) {
    return RealEstateListingModel.create(listingData);
  }

  updateRealEstateListing(listingId: string, listingData: any) {
    return RealEstateListingModel.findByIdAndUpdate(listingId, listingData, { new: true });
  }

  deleteRealEstateListing(listingId: string) {
    return RealEstateListingModel.findByIdAndDelete(listingId);
  }
}
