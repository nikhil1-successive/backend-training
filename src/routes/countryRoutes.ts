import  express  from "express";
import CountryController from "../controllers/countryController";
const router=express.Router();
const countryController=new CountryController();
router.get("/get",countryController.getAllCountry);
router.post("/create",countryController.addCountry)
export default router;