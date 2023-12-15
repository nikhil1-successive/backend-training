"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const generatePlaceholderData = () => ({
    title: 'Sample Listing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 500000,
    location: 'Cityville',
    details: {
        bedrooms: 3,
        bathrooms: 2,
        areaSquareFeet: 2000,
        isFurnished: true,
        hasGarage: true,
        isPetsAllowed: false,
        agentName: 'John Doe',
        contactEmail: 'john.doe@example.com',
        contactPhone: '555-1234',
        hasSwimmingPool: false,
        isSecurityEnabled: true,
        isGatedCommunity: true,
        hasGarden: true,
        constructionYear: 2000,
        energyEfficiencyRating: 'A',
    },
});
const generateCSV = (filename, entries) => {
    const data = [];
    for (let i = 0; i < entries; i++) {
        data.push(generatePlaceholderData());
    }
    const csvContent = data.map(entry => Object.values(entry).join(',')).join('\n');
    fs.writeFileSync(filename, csvContent);
};
const filename = 'realEstateListings.csv';
const entries = 50000;
generateCSV(filename, entries);
console.log(`CSV file "${filename}" with ${entries} entries generated.`);
