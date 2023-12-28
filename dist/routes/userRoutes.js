"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const MockData_1 = __importDefault(require("../utils/MockData"));
const LimiterMiddleware_1 = __importDefault(require("../middleware/LimiterMiddleware"));
const ErrorHandlingMiddleware_1 = __importDefault(require("../middleware/ErrorHandlingMiddleware"));
const Dataseeding_1 = require("../utils/Dataseeding");
const RegistrationValidationSchema_1 = __importDefault(require("../utils/RegistrationValidationSchema"));
const AuthMiddleware_1 = __importDefault(require("../middleware/AuthMiddleware"));
const ValidationRules_1 = __importDefault(require("../utils/ValidationRules"));
const ValidateParamMiddleware_1 = __importDefault(require("../middleware/ValidateParamMiddleware"));
const QueryMiddleware_1 = __importDefault(require("../middleware/QueryMiddleware"));
const LocationMiddleware_1 = __importDefault(require("../middleware/LocationMiddleware"));
const customheaderMiddleware_1 = __importDefault(require("../middleware/customheaderMiddleware"));
const CustomMiddleware_1 = __importDefault(require("../middleware/CustomMiddleware"));
const router = express_1.default.Router();
const secretKey = 'alpha-beta-gamma';
const rateLimiter = new LimiterMiddleware_1.default();
const errorHandler = new ErrorHandlingMiddleware_1.default();
const queryMiddleware = new QueryMiddleware_1.default();
const validateParametersMiddleware = new ValidateParamMiddleware_1.default();
const authMiddleware = new AuthMiddleware_1.default(secretKey);
const customMiddleware = new CustomMiddleware_1.default();
const geoLocationMiddleware = new LocationMiddleware_1.default({ allowedCountry: "IN" });
router.use(express_1.default.json());
router.use(rateLimiter.processRequest.bind(rateLimiter));
router.use(errorHandler.processError.bind(errorHandler));
// hit this route by passing email and password in body. Get email and body from mockData.ts file. 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = MockData_1.default.getUserByEmail(email);
    if (user && user.password === password) {
        const token = jsonwebtoken_1.default.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    }
    else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});
// hit this route by passing {Key:'Authorization' and Value:'Token' in Headers}. You will get Token on successfull login
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/chainmiddleware', authMiddleware.authenticateUser, (req, res) => {
    res.send("Middleware Called");
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.post('/seeddata', (req, res) => {
    const dataSeeder = new Dataseeding_1.DataSeeder();
    const foodData = dataSeeder.seedData();
    res.json(foodData);
    console.log("Data seeding completed");
});
// hit this route as (http://localhost:8000/routes/signup) with body {"email":"nikhil@successive.com", "username":"aaa", "password":"nik123"}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.post("/signup", (0, ValidationRules_1.default)("login"), RegistrationValidationSchema_1.default, (req, res) => {
    res.json({ success: true });
});
//hit this route ex-(http://localhost:8000/routes/query?value=2)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/query', queryMiddleware.processRequest, (req, res) => {
    res.json("Query Send");
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get("/location", geoLocationMiddleware.middleware, (req, res) => {
    res.send("You are authorized!");
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/customheader', customheaderMiddleware_1.default, (req, res) => {
    res.send('This route has a custom header set!');
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.get('/custommiddleware', customMiddleware.middleware, (req, res) => {
    console.log('Route logic executed');
});
// hit this route as http://localhost:8000/routes/params with body { "arg1":"12","arg2":"22"}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
router.post('/params', validateParametersMiddleware.validateParameters, (req, res) => {
    res.json({
        message: 'Success',
        status: 200,
        location: 'body'
    });
});
exports.default = router;
