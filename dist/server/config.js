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
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../db/config"));
const upload_1 = __importDefault(require("../routes/upload"));
const campaign_1 = __importDefault(require("../routes/campaign"));
const data_1 = __importDefault(require("../routes/data"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT,
            this.path = {
                upload: '/upload',
                campaign: '/campaign',
                getData: '/data'
            },
            this.db();
        this.middlewares();
        this.routes();
    }
    publicFolder() {
        const publicPath = path_1.default.resolve(__dirname, "../public");
        this.app.use(express_1.default.static(publicPath));
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.publicFolder();
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: "/tmp/",
            createParentPath: true,
        }));
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server port: ${this.port}`);
        });
    }
    db() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.default)();
        });
    }
    routes() {
        this.app.use(this.path.upload, upload_1.default),
            this.app.use(this.path.campaign, campaign_1.default),
            this.app.use(this.path.getData, data_1.default);
    }
}
exports.default = Server;
