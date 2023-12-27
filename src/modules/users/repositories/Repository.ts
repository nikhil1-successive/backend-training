import { Model, Document } from 'mongoose';
import { RealEstateListingModel } from './model'
import { IRealEstateListing } from './model';

export class RealEstateListingRepository {
  private model: Model<IRealEstateListing>;

  constructor() {
    this.model = RealEstateListingModel;
  }
  async findAll(): Promise<IRealEstateListing[]> {
    return this.model.find({}).exec();
  }
  async findById(id: string): Promise<IRealEstateListing | null> {
    return this.model.findById(id).exec();
  }
  async create(data: any): Promise<IRealEstateListing> {
    return this.model.create(data);
  }
  async update(id: string, data: any): Promise<IRealEstateListing | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }
  async delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }
  async findByTitle(title: string): Promise<IRealEstateListing[]> {
    return this.model.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
  }
  async findByAddress(address: string): Promise<IRealEstateListing[]> {
    return this.model.find({ title: { $regex: new RegExp(address, 'i') } }).exec();
  }
  async findByPrice(price: string): Promise<IRealEstateListing[]> {
    return this.model.find({ price: { $regex: new RegExp(price, 'i') } }).exec();
  }
}
