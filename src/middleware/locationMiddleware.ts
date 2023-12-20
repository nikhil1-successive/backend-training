import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';

class LocationMiddleware {
  async processRequest(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clientIP: string | undefined = req.ip;
      const response: AxiosResponse<any> = await axios.get(`https://ipinfo.io/${clientIP}/json`);
      const { country }: any = response.data;

      if (country !== 'India') {
        res.status(403).json({
          error: 'Access denied.',
        });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Error',
      });
    }
  }
}

export default LocationMiddleware;
