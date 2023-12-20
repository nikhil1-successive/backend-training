"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mockData_1 = __importDefault(require("../utils/mockData"));
const limiterMiddleware_1 = __importDefault(require("../middleware/limiterMiddleware"));
const errorHandlingMiddleware_1 = __importDefault(require("../middleware/errorHandlingMiddleware"));
const dataseeding_1 = __importDefault(require("../utils/dataseeding"));
const registrationValidationSchema_1 = __importDefault(require("../utils/registrationValidationSchema"));
const locationMiddleware_1 = __importDefault(require("../middleware/locationMiddleware"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const validationRules_1 = __importDefault(require("../utils/validationRules"));
const validateParamMiddleware_1 = __importDefault(require("../middleware/validateParamMiddleware"));
const queryMiddleware_1 = __importDefault(require("../middleware/queryMiddleware"));
const customMiddleware_1 = __importDefault(require("../middleware/customMiddleware"));
const router = express_1.default.Router();
const secretKey = 'alpha-beta-gamma';
const rateLimiter = new limiterMiddleware_1.default();
const userData = new mockData_1.default();
const errorHandler = new errorHandlingMiddleware_1.default();
const dataSeeder = new dataseeding_1.default();
const queryMiddleware = new queryMiddleware_1.default();
const locationMiddleware = new locationMiddleware_1.default();
const customMiddleware = new customMiddleware_1.default();
const validateParametersMiddleware = new validateParamMiddleware_1.default();
const authMiddleware = new authMiddleware_1.default(secretKey);
router.use(express_1.default.json());
router.use(rateLimiter.processRequest.bind(rateLimiter));
router.use(dataSeeder.seedData.bind(dataSeeder));
router.use(errorHandler.processError.bind(errorHandler));
router.post('/login', customMiddleware.middleware, (req, res) => {
    const { email, password } = req.body;
    const user = mockData_1.default.getUserByEmail(email);
    if (user && user.password === password) {
        const token = jsonwebtoken_1.default.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    }
    else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});
router.get('/chainmiddleware', authMiddleware.authenticate, (req, res) => {
    // Your middleware chain logic here
    res.send("Middleware Called");
});
router.post('/seeddata', (req, res) => {
    const foodData = dataSeeder.seedData();
    res.json(foodData);
    console.log("Data seeding completed");
});
router.post("/signup", (0, validationRules_1.default)("login"), registrationValidationSchema_1.default, (req, res) => {
    res.json({ success: true });
});
router.get('/query', queryMiddleware.processRequest, (req, res) => {
    res.json("Query Send");
});
router.get('/location', locationMiddleware.processRequest, (req, res) => {
    res.json({ message: 'Access granted!' });
});
router.post('/params', validateParametersMiddleware.validateParameters, (req, res) => {
    res.json({
        message: 'Success',
        status: 400,
        location: 'body'
    });
});
exports.default = router;
