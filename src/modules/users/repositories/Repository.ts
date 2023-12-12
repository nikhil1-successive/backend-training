import { RealEstateListingModel } from './Model';

export class RealEstateListingRepository {
  getAllListings() {
    return RealEstateListingModel.find({});
  }

  getListingById(listingId: string) {
    return RealEstateListingModel.findById(listingId);
  }

  createListing(listingData: any) {
    return RealEstateListingModel.create(listingData);
  }

  updateListing(listingId: string, listingData: any) {
    return RealEstateListingModel.findByIdAndUpdate(listingId, listingData, { new: true });
  }

  deleteListing(listingId: string) {
    return RealEstateListingModel.findByIdAndDelete(listingId);
  }
}
