"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingRepository = void 0;
const model_1 = require("./model");
class RealEstateListingRepository {
    constructor() {
        this.model = model_1.RealEstateListingModel;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({}).exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findById(id).exec();
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.create(data);
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.findByIdAndDelete(id).exec();
        });
    }
    findByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ title: { $regex: new RegExp(title, 'i') } }).exec();
        });
    }
    findByAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ title: { $regex: new RegExp(address, 'i') } }).exec();
        });
    }
    findByPrice(price) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.model.find({ price: { $regex: new RegExp(price, 'i') } }).exec();
        });
    }
}
exports.RealEstateListingRepository = RealEstateListingRepository;
