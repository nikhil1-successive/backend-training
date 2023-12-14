"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const customMiddleware_1 = __importDefault(require("../middleware/customMiddleware"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const errorHandlingMiddleware_1 = __importDefault(require("../middleware/errorHandlingMiddleware"));
const limiterMiddleware_1 = __importDefault(require("../middleware/limiterMiddleware"));
const middlewareFunctions_1 = require("../middleware/middlewareFunctions");
const mockData_1 = __importDefault(require("../utils/mockData"));
const customheaderMiddleware_1 = __importDefault(require("../middleware/customheaderMiddleware"));
const dataseeding_1 = require("../utils/dataseeding");
const queryMiddleware_1 = __importDefault(require("../middleware/queryMiddleware"));
const registrationValidationSchema_1 = __importDefault(require("../utils/registrationValidationSchema"));
const locationMiddleware_1 = __importDefault(require("../middleware/locationMiddleware"));
const validationRules_1 = __importDefault(require("../utils/validationRules"));
const validateParamMiddleware_1 = __importDefault(require("../middleware/validateParamMiddleware"));
const router = express_1.default.Router();
const secretKey = 'alpha-beta-gamma';
router.use(express_1.default.json());
router.use(limiterMiddleware_1.default);
router.use(customheaderMiddleware_1.default);
router.use(errorHandlingMiddleware_1.default);
// Refer to mockData.js for email and password required for authentication
router.post('/login', customMiddleware_1.default, (req, res) => {
    const { email, password } = req.body;
    const user = mockData_1.default.find(u => u.email === email && u.password === password);
    if (user) {
        const token = jsonwebtoken_1.default.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    }
    else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
});
router.get('/chainmiddleware', customMiddleware_1.default, authMiddleware_1.default, middlewareFunctions_1.middleware1, middlewareFunctions_1.middleware2, (req, res) => {
    res.send("Middleware Called");
});
router.post('/seeddata', customMiddleware_1.default, authMiddleware_1.default, (req, res) => {
    const foodData = (0, dataseeding_1.dataSeeder)();
    res.json(foodData);
    console.log("Data seeding completed");
});
// http://localhost:6000/routes/signup ( body : {"email":"nik@gmail.com","username":"nik","password":"1223223"})
router.post("/signup", (0, validationRules_1.default)("login"), registrationValidationSchema_1.default, (req, res) => {
    res.json({ success: true });
});
// http://localhost:8000/routes/query?value=ew (hit query route like this)
router.get('/query', queryMiddleware_1.default, (req, res) => {
    res.json("Query Send");
});
// hit this route - (http://localhost:6000/routes/location)
router.get('/location', locationMiddleware_1.default, (req, res) => {
    res.json({ message: 'Access granted!' });
});
// hit this route - (http://localhost:6000/routes/params) with body ({ "arg1":"a","arg2":"s"})
router.post('/params', validateParamMiddleware_1.default, (req, res) => {
    res.json({
        message: 'Success',
        status: 400,
        location: 'body'
    });
});
exports.default = router;
