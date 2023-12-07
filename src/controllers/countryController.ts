import { Request, Response } from "express";
import CountryService from "../services/countryService.js"
class CountryController{
    private countryService=new CountryService();
    public getAllCountry=async(req:Request,res:Response)=>{
        const data= await this.countryService.getAllCountry();
        res.send(data);
    }
}
export default CountryController;