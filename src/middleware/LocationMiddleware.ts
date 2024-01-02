import axios, { AxiosResponse } from 'axios';
import { Request, Response, NextFunction } from 'express';

interface IGeoLocationMiddlewareOptions {
  allowedCountry: string;
}

class GeoLocationMiddleware {
  private allowedCountry: string;
  constructor(options: IGeoLocationMiddlewareOptions) {
    this.allowedCountry = options.allowedCountry;
  }
  public middleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const clientIP: string | undefined = req.ip;
      const response: AxiosResponse<any, any> = await axios.get(`https://ipinfo.io/${clientIP}/json`);
      const { country }: any = response.data;
      if (country !== this.allowedCountry) {
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
  };
}
export default GeoLocationMiddleware;
