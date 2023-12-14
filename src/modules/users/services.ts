// import { RealEstateListingModel } from './repositories/Model';

// export class RealEstateListingService {
//   getRealEstateListings() {
//     return RealEstateListingModel.find({});
//   }

//   getRealEstateListingById(listingId: string) {
//     return RealEstateListingModel.findById(listingId);
//   }

//   createRealEstateListing(listingData: any) {
//     return RealEstateListingModel.create(listingData);
//   }

//   updateRealEstateListing(listingId: string, listingData: any) {
//     return RealEstateListingModel.findByIdAndUpdate(listingId, listingData, { new: true });
//   }

//   deleteRealEstateListing(listingId: string) {
//     return RealEstateListingModel.findByIdAndDelete(listingId);
//   }
//   getRealEstateListingsByTitle(title: string){
//     return RealEstateListingModel.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
//   }

//   getRealEstateListingsByAddress(address: string){
//     return RealEstateListingModel.find({ address: { $regex: new RegExp(address, 'i') } }).exec();
//   }

//   getRealEstateListingsByPrice(price: number) {
//     return RealEstateListingModel.find({ price: { $eq: price } }).exec();
//   }

//   getRealEstateListingsByBathrooms(bathrooms: number) {
//     return RealEstateListingModel.find({ bathrooms: { $eq: bathrooms } }).exec();
//   }

//   getRealEstateListingsByAreaSquareFeet(areaSquareFeet: number){
//     return RealEstateListingModel.find({ areaSquareFeet: { $eq: areaSquareFeet } }).exec();
//   }
// }

import { IRealEstateListing } from './repositories/Model';
import { RealEstateListingRepository } from './repositories/Repository';


export class RealEstateListingService {
  private repository: RealEstateListingRepository;

  constructor() {
    this.repository = new RealEstateListingRepository();
  }

  async getRealEstateListings(): Promise<IRealEstateListing[]> {
    return this.repository.findAll();
  }

  async getRealEstateListingById(listingId: string): Promise<IRealEstateListing | null> {
    return this.repository.findById(listingId);
  }

  async createRealEstateListing(listingData: any): Promise<IRealEstateListing> {
    return this.repository.create(listingData);
  }

  async updateRealEstateListing(listingId: string, listingData: any): Promise<IRealEstateListing | null> {
    return this.repository.update(listingId, listingData);
  }

  async deleteRealEstateListing(listingId: string){
     return this.repository.delete(listingId);
  }

  async getRealEstateListingsByTitle(title: string): Promise<IRealEstateListing[]> {
    return this.repository.findByTitle(title);
  }


  getRealEstateListingsByAddress(address: string){
    return this.repository.findByAddress(address);
  }

  getRealEstateListingsByPrice(price: string) {
    return this.repository.findByPrice(price)
  }

  // Implement other search methods as needed
}
