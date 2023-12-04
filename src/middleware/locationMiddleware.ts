import axios from "axios";
import { Request, Response, NextFunction } from "express";

const locationMiddleware = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientIP = req.ip;
      const response = await axios.get(`https://ipinfo.io/${clientIP}/json`);
      const { country } = response.data;

      if (country !== "India") {
        return res.status(403).json({
          error: 'Access denied.',
        });
      }
      next();
    } catch (error) {
      return res.status(500).json({
        error: 'Error',
      });
    }
  };
};

export default locationMiddleware;
