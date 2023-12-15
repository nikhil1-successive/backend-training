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
exports.RealEstateListingService = void 0;
const Repository_1 = require("./repositories/Repository");
class RealEstateListingService {
    constructor() {
        this.repository = new Repository_1.RealEstateListingRepository();
    }
    getAllListings() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findAll();
        });
    }
    getListingById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findById(id);
        });
    }
    createListing(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // You may want to add validation or any other business logic here before creating a listing
            return this.repository.create(data);
        });
    }
    updateListing(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            // You may want to add validation or any other business logic here before updating a listing
            return this.repository.update(id, data);
        });
    }
    deleteListing(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.delete(id);
        });
    }
    searchListingsByTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findByTitle(title);
        });
    }
    searchListingsByAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findByAddress(address);
        });
    }
    searchListingsByPrice(price) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findByPrice(price);
        });
    }
}
exports.RealEstateListingService = RealEstateListingService;
