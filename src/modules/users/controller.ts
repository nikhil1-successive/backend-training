import { Request, Response } from 'express';
import { RealEstateListingModel } from './repositories/Model';
import { RealEstateListingService } from './services';

export class RealEstateListingController {
  private readonly realEstateListingService: RealEstateListingService;

  constructor() {
    this.realEstateListingService = new RealEstateListingService();
  }

  async createRealEstateListing(req: Request, res: Response): Promise<void> {
    try {
      const newListing = await this.realEstateListingService.createRealEstateListing(req.body);
      res.status(201).json(newListing);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to create real estate listing' });
    }
  }

  async getRealEstateListings(req: Request, res: Response): Promise<void> {
    try {
      const listings = await this.realEstateListingService.getRealEstateListings();
      res.json(listings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings' });
    }
  }

  async updateRealEstateListing(req: Request, res: Response): Promise<void> {
    const listingId = req.params.listingId;

    try {
      const updatedListing = await this.realEstateListingService.updateRealEstateListing(listingId, req.body);
      if (updatedListing) {
        res.json(updatedListing);
      } else {
        res.status(404).json({ error: 'Real Estate Listing not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to update real estate listing' });
    }
  }

  async getRealEstateListingById(req: Request, res: Response): Promise<void> {
    const listingId = req.params.listingId;

    try {
      const listing = await this.realEstateListingService.getRealEstateListingById(listingId);
      if (listing) {
        res.json(listing);
      } else {
        res.status(404).json({ error: 'Real Estate Listing not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listing by ID' });
    }
  }

  async deleteRealEstateListing(req: Request, res: Response): Promise<void> {
    const listingId = req.params.listingId;

    try {
      const deletedListing = await this.realEstateListingService.deleteRealEstateListing(listingId);
      if (deletedListing) {
        res.json(deletedListing);
      } else {
        res.status(404).json({ error: 'Real Estate Listing not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to delete real estate listing' });
    }
  }
  async getRealEstateListingsByTitle(req: Request, res: Response): Promise<void> {
    const title = req.params.title;

    try {
      const listings = await this.realEstateListingService.getRealEstateListingsByTitle(title);
      res.json(listings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by title' });
    }
  }

  async getRealEstateListingsByAddress(req: Request, res: Response): Promise<void> {
    const address = req.params.address;

    try {
      const listings = await this.realEstateListingService.getRealEstateListingsByAddress(address);
      res.json(listings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by address' });
    }
  }

  async getRealEstateListingsByPrice(req: Request, res: Response): Promise<void> {
    const price = parseFloat(req.params.price);

    try {
      const listings = await this.realEstateListingService.getRealEstateListingsByPrice(price);
      res.json(listings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by price' });
    }
  }

  // async getRealEstateListingsByBathrooms(req: Request, res: Response): Promise<void> {
  //   const bathrooms = parseFloat(req.params.bathrooms)

  //   try {
  //     const listings = await this.realEstateListingService.getRealEstateListingsByBathrooms(bathrooms);
  //     res.json(listings);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by bathrooms' });
  //   }
  // }

  // async getRealEstateListingsByAreaSquareFeet(req: Request, res: Response): Promise<void> {
  //   const areaSquareFeet = parseFloat(req.params.areaSquareFeet);

  //   try {
  //     const listings = await this.realEstateListingService.getRealEstateListingsByAreaSquareFeet(areaSquareFeet);
  //     res.json(listings);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: 'Internal Server Error: Unable to get real estate listings by areaSquareFeet' });
  //   }
  // }
}

export default RealEstateListingController;
