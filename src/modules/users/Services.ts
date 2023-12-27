import { RealEstateListingRepository } from './repositories/Repository';
import { IRealEstateListing } from './repositories/model';

export class RealEstateListingService {
  private repository: RealEstateListingRepository;

  constructor() {
    this.repository = new RealEstateListingRepository();
  }
  async getAllListings(): Promise<IRealEstateListing[]> {
    return this.repository.findAll();
  }
  async getListingById(id: string): Promise<IRealEstateListing | null> {
    return this.repository.findById(id);
  }
  async createListing(data: any): Promise<IRealEstateListing> {
    return this.repository.create(data);
  }
  async updateListing(id: string, data: any): Promise<IRealEstateListing | null> {
    return this.repository.update(id, data);
  }
  async deleteListing(id: string): Promise<void> {
    this.repository.delete(id);
  }
  async searchListingsByTitle(title: string): Promise<IRealEstateListing[]> {
    return this.repository.findByTitle(title);
  }
  async searchListingsByAddress(address: string): Promise<IRealEstateListing[]> {
    return this.repository.findByAddress(address);
  }
  async searchListingsByPrice(price: string): Promise<IRealEstateListing[]> {
    return this.repository.findByPrice(price);
  }
}
