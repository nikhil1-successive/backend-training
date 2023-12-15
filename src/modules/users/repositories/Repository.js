"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingRepository = void 0;
const Model_1 = require("./Model");
class RealEstateListingRepository {
    constructor() {
        this.model = Model_1.RealEstateListingModel;
    }
    async findAll() {
        return this.model.find({}).exec();
    }
    async findById(id) {
        return this.model.findById(id).exec();
    }
    async create(data) {
        return this.model.create(data);
    }
    async update(id, data) {
        return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id) {
        return this.model.findByIdAndDelete(id).exec();
    }
    async findByTitle(title) {
        return this.model.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
    }
    async findByAddress(address) {
        return this.model.find({ title: { $regex: new RegExp(address, 'i') } }).exec();
    }
    async findByPrice(price) {
        return this.model.find({ price: { $regex: new RegExp(price, 'i') } }).exec();
    }
}
exports.RealEstateListingRepository = RealEstateListingRepository;
