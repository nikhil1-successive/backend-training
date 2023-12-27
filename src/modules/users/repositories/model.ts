import { model, Schema, Document } from 'mongoose';

export interface IRealEstateListing extends Document {
  title: string;
  description: string;
  price: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  details: {
    bedrooms: number;
    bathrooms: number;
    areaSquareFeet: number;
    isFurnished: boolean;
    hasGarage: boolean;
    isPetsAllowed: boolean;
    agentName: string;
    contactEmail: string;
    contactPhone: number;
    hasSwimmingPool: boolean;
    isSecurityEnabled: boolean;
    isGatedCommunity: boolean;
    hasGarden: boolean;
    constructionYear: number;
    energyEfficiencyRating: string;
  };
}

const realEstateListingSchema = new Schema<IRealEstateListing>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
  address: { type: String },
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

export const RealEstateListingModel = model<IRealEstateListing>('RealEstateListing', realEstateListingSchema);
