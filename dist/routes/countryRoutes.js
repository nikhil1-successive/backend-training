"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const countryController_1 = __importDefault(require("../controllers/countryController"));
const validatecountryMiddleware_js_1 = __importDefault(require("../middleware/validatecountryMiddleware.js"));
const router = express_1.default.Router();
const countryController = new countryController_1.default();
router.get("/get", countryController.getAllCountry);
router.post("/create", validatecountryMiddleware_js_1.default, countryController.addCountry);
exports.default = router;