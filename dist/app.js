"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const limiterMiddleware_1 = __importDefault(require("./middleware/limiterMiddleware"));
// import SeedData from './lib/seeding';
// import router from './routes';
const connection_1 = __importDefault(require("./lib/connection"));
const routes_1 = __importDefault(require("./modules/users/routes"));
class App {
    constructor() {
        // private async seedData(): Promise<void> {
        //   const seedDatas = new SeedData();
        //   console.log("Hi")
        //   await seedDatas.seedData();
        // }
        this.run = () => __awaiter(this, void 0, void 0, function* () {
            yield this.connection.connectDB();
            this.app.listen(this.port, () => {
                console.log(`Server is running on port ${this.port}`);
                console.log(`http://localhost:${this.port}`);
            });
        });
        this.connection = new connection_1.default();
        this.app = (0, express_1.default)();
        this.port = 3956
        this.configureMiddleware();
        this.configureRoutes();
        // this.seedData();
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
        // this.app.use('/route', userRoutes);
        this.app.use('/user', routes_1.default);
    }
}
exports.default = App;
