"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import auth from '../middleware/auth.js'
// import { asyncHandler, asyncFunc } from "./asynchronousRoutes.js"
// import validateParameters from './parameterRoute.js'
const errorHandler_js_1 = __importDefault(require("../middleware/errorHandler.js"));
const http_errors_1 = __importDefault(require("http-errors"));
// import customMiddleware from "../middleware/customMiddleware.js"
// import tokenVerificationMiddleware from '../middleware/tokenVerificationMiddleware.js'
// import limiter from '../middleware/limiterMiddleware.js'
const middlewareFunctions_js_1 = require("../middleware/middlewareFunctions.js");
const dataseeding_js_1 = __importDefault(require("../utils/dataseeding.js"));
const mockData_js_1 = __importDefault(require("../utils/mockData.js"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_validation_1 = require("express-validation");
const queryMiddleware_js_1 = __importDefault(require("../middleware/queryMiddleware.js"));
// import validateRegistration from '../utils/registrationValidationSchema.js'
const locationMiddleware_js_1 = __importDefault(require("../middleware/locationMiddleware.js"));
const router = express_1.default.Router();
const secretKey = 'Nikhil';
// router.use(limiter)
router.use(express_1.default.json());
router.use(body_parser_1.default.json());
router.post('/register', (req, res) => {
    mockData_js_1.default.push(req.body.name);
    res.json(mockData_js_1.default);
});
// router.get('/login', (req, res) => {
//   const { name } = req.body
//   const user = nameData.find((user) => user.name === name)
//   if (user) {
//     const token = jwt.sign(
//       { name: user.name },
//       secretKey,
//       { expiresIn: '10h' }
//     )
//     res.json({ token })
//   } else {
//     res.status(401).json({ message: 'Invalid username' })
//   }
// })
// router.get('/authorized', tokenVerificationMiddleware, (req, res) => {
//   res.json({ message: 'Welcome To Authorized Content.', user: req.user })
// })
// router.get('/console', customMiddleware, (req, res) => {
//   res.send("User Details")
// })
router.get('/middleware', middlewareFunctions_js_1.middleware1, middlewareFunctions_js_1.middleware2, (req, res) => {
    res.send("Middleware Called");
});
router.get('/getName', (req, res) => {
    res.send(mockData_js_1.default);
});
router.get('/getFood', (req, res) => {
    res.send(dataseeding_js_1.default);
});
// router.get('/error', errorHandlerMiddleware, (req, res) => {
//   res.send("404 Not Found")
// })
// router.post('/registerUser', validateRegistration, (req, res) => {
//   const { email, password } = req.body;
//   res.json({ message: 'Registration successful' });
// });
router.get('/query', queryMiddleware_js_1.default, (req, res) => {
    res.json("Query.");
});
router.get('/location', locationMiddleware_js_1.default, (req, res) => {
    res.json({ message: 'Access granted!' });
});
router.use(function (err, res) {
    if (err instanceof express_validation_1.ValidationError) {
        return res.json("Unauthorized Access");
    }
    return res.json(err);
});
// router.get('/protected', auth, (req, res) => {
//   res.json({ message: 'This is a protected resource', user: req.user })
// })
// router.get('/async', asyncHandler(async (req, res, next) => {
//   try {
//     const result1 = await asyncFunc(Promise.reject(401));
//     const result = `${result1}`;
//     return res.send(result);
//   } catch (error) {
//     next(error);
//   }
// }));
// router.post('/params', validateParameters, (req, res) => {
//   res.json({ message: 'Success' });
// });
router.use((req, res, next) => {
    throw new Error('Error occured!');
});
router.use(errorHandler_js_1.default);
// router.use((err, req, res, next) => {
//   const statusCode = err.status || 500;
//   res.status(statusCode).json({ error: err.message });
// });
router.get('/errormiddleware', (req, res, next) => {
    try {
        throw new Error('Something went wrong');
        res.send('Success');
    }
    catch (error) {
        next(error);
    }
});
router.use((req, res, next) => {
    next((0, http_errors_1.default)(404, 'Not Found'));
});
// router.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message,
//     },
//   });
// });
exports.default = router;
