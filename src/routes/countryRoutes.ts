import  express  from "express";
import CountryController from "../controllers/countryController";
import validateCountryMiddleware from "../middleware/validatecountryMiddleware.js";
import  {UserController} from "../modules/users/controller.js";
const router=express.Router();
const countryController=new CountryController();
router.get("/get",countryController.getAllCountry);
router.post("/create",validateCountryMiddleware,countryController.addCountry)
// router.get("/gets", UserController.createUser)

export default router;
