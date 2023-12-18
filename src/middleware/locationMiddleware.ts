import axios, { AxiosResponse } from "axios";
import { Request, Response, NextFunction } from "express";

const locationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clientIP: string | undefined = req.ip;
    const response: AxiosResponse<any, any> = await axios.get(`https://ipinfo.io/${clientIP}/json`);
    const { country }: any = response.data;

    if (country !== "India") {
      return res.status(403).json({
        error: 'Access denied.',
      });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error',
    });
  }
};

export default locationMiddleware;
