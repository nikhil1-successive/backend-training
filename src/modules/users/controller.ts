import { Request, Response } from 'express';
import { RealEstateListingService } from './services';

const realEstateService = new RealEstateListingService();

class RealEstateListingController {
  static async getAllListings(req: Request, res: Response) {
    try {
      const listings = await realEstateService.getAllListings();
      res.status(200).json(listings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getListingById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const listing = await realEstateService.getListingById(id);
      if (listing) {
        res.status(200).json(listing);
      } else {
        res.status(404).json({ message: 'Listing not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createListing(req: Request, res: Response) {
    const listingData = req.body;
    try {
      const newListing = await realEstateService.createListing(listingData);
      res.status(201).json(newListing);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateListing(req: Request, res: Response) {
    const { id } = req.params;
    const listingData = req.body;
    try {
      const updatedListing = await realEstateService.updateListing(id, listingData);
      if (updatedListing) {
        res.status(200).json(updatedListing);
      } else {
        res.status(404).json({ message: 'Listing not found' });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteListing(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await realEstateService.deleteListing(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async searchListingsByTitle(req: Request, res: Response) {
    const { title } = req.params;
    try {
      const listings = await realEstateService.searchListingsByTitle(title);
      res.status(200).json(listings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async searchListingsByAddress(req: Request, res: Response) {
    const { address } = req.params;
    try {
      const listings = await realEstateService.searchListingsByAddress(address);
      res.status(200).json(listings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async searchListingsByPrice(req: Request, res: Response) {
    const { price } = req.params;
    try {
      const listings = await realEstateService.searchListingsByPrice(price);
      res.status(200).json(listings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default RealEstateListingController;
