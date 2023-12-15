import * as fs from 'fs';

interface RealEstateListing {
  title: string;
  description: string;
  price: number;
  location: string;
  details: {
    bedrooms: number;
    bathrooms: number;
    areaSquareFeet: number;
    isFurnished: boolean;
    hasGarage: boolean;
    isPetsAllowed: boolean;
    agentName: string;
    contactEmail: string;
    contactPhone: string;
    hasSwimmingPool: boolean;
    isSecurityEnabled: boolean;
    isGatedCommunity: boolean;
    hasGarden: boolean;
    constructionYear: number;
    energyEfficiencyRating: string;
  };
}

const generatePlaceholderData = (): RealEstateListing => ({
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

const generateCSV = (filename: string, entries: number): void => {
  const data: RealEstateListing[] = [];
  for (let i = 0; i < entries; i++) {
    data.push(generatePlaceholderData());
  }

  const csvContent = data.map(entry => Object.values(entry).join(',')).join('\n');
  fs.writeFileSync(filename, csvContent);
};

const filename = 'realEstateListings.csv';
const entries = 500000;

generateCSV(filename, entries);
console.log(`CSV file "${filename}" with ${entries} entries generated.`);
