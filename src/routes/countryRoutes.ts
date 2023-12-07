import  express  from "express";
import CountryController from "../controllers/countryController";
const router=express.Router();
const countryController=new CountryController();
router.get("/get",countryController.getAllCountry);
export default router;