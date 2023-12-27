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
const index_1 = __importDefault(require("./routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const Seeding_1 = __importDefault(require("./lib/Seeding"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 7000;
        this.configureMiddleware();
        this.configureRoutes();
        this.seedData();
    }
    configureMiddleware() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default);
    }
    configureRoutes() {
        this.app.get('/', (req, res) => {
            res.send('Welcome.');
        });
        this.app.use('/route', index_1.default);
    }
    seedData() {
        return __awaiter(this, void 0, void 0, function* () {
            const seedDatas = new Seeding_1.default();
            console.log("Seeding started");
            yield seedDatas.seedData();
        });
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
            console.log(`http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
