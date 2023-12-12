"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealEstateListingModel = void 0;
const mongoose_1 = require("mongoose");
const realEstateListingSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    details: {
        bedrooms: { type: Number },
        bathrooms: { type: Number },
        areaSquareFeet: { type: Number },
        isFurnished: { type: Boolean },
        hasGarage: { type: Boolean },
        isPetsAllowed: { type: Boolean },
        agentName: { type: String },
        contactEmail: { type: String },
        contactPhone: { type: String },
        hasSwimmingPool: { type: Boolean },
        isSecurityEnabled: { type: Boolean },
        isGatedCommunity: { type: Boolean },
        hasGarden: { type: Boolean },
        constructionYear: { type: Number },
        energyEfficiencyRating: { type: String },
    },
});
exports.RealEstateListingModel = (0, mongoose_1.model)('RealEstateListing', realEstateListingSchema);
