export interface IRealEstateListing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
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
    contactPhone: string;
    hasSwimmingPool: boolean;
    isSecurityEnabled: boolean;
    hasGarden: boolean;
    constructionYear: number;
  };
}
