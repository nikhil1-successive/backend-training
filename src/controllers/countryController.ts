import { Request, Response } from "express";
import CountryService from "../services/countryService.js"
class CountryController{
    private countryService=new CountryService();
    public getAllCountry=async(req:Request,res:Response)=>{
        const data= await this.countryService.getAllCountry();
        res.send(data);
    }
    public addCountry=async(req:Request,res:Response)=>{
        const data= req.body
        await this.countryService.addCountry(data)
        res.send("Data added");
    }
}
export default CountryController;