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
  getRealEstateListingsByTitle(title: string){
    return RealEstateListingModel.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
  }

  getRealEstateListingsByAddress(address: string){
    return RealEstateListingModel.find({ address: { $regex: new RegExp(address, 'i') } }).exec();
  }

  getRealEstateListingsByPrice(price: number) {
    return RealEstateListingModel.find({ price: { $eq: price } }).exec();
  }

  getRealEstateListingsByBathrooms(bathrooms: number) {
    return RealEstateListingModel.find({ bathrooms: { $eq: bathrooms } }).exec();
  }

  getRealEstateListingsByAreaSquareFeet(areaSquareFeet: number){
    return RealEstateListingModel.find({ areaSquareFeet: { $eq: areaSquareFeet } }).exec();
  }
}
