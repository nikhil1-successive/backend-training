"use strict";
// import { RealEstateListingModel } from './repositories/Model';
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
exports.RealEstateListingService = void 0;
const Repository_1 = require("./repositories/Repository");
class RealEstateListingService {
    constructor() {
        this.repository = new Repository_1.RealEstateListingRepository();
    }
    getRealEstateListings() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findAll();
        });
    }
    getRealEstateListingById(listingId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findById(listingId);
        });
    }
    createRealEstateListing(listingData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.create(listingData);
        });
    }
    updateRealEstateListing(listingId, listingData) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.update(listingId, listingData);
        });
    }
    deleteRealEstateListing(listingId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.delete(listingId);
        });
    }
    getRealEstateListingsByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findByTitle(title);
        });
    }
    getRealEstateListingsByAddress(address) {
        return this.repository.findByAddress(address);
    }
    getRealEstateListingsByPrice(price) {
        return this.repository.findByPrice(price);
    }
}
exports.RealEstateListingService = RealEstateListingService;
