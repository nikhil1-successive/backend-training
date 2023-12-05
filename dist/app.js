"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const limiterMiddleware_1 = __importDefault(require("./middleware/limiterMiddleware"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.configureMiddleware();
        this.configureRoutes();
    }
    configureMiddleware() {
        this.app.use(limiterMiddleware_1.default);
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.json());
    }
    configureRoutes() {
        this.app.get('/', (req, res) => {
            res.send('Welcome.');
        });
        this.app.use('/route', index_1.default);
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
            console.log(`http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
