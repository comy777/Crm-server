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
exports.validateFile = void 0;
const upload_1 = require("./upload");
const xlsx_1 = __importDefault(require("xlsx"));
const Crm_1 = __importDefault(require("../models/Crm"));
const Campaign_1 = __importDefault(require("../models/Campaign"));
const validateFile = (file) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, tempFilePath } = file;
    const extension = name.split('.');
    const validateExtension = ['csv'];
    const extensionName = extension[extension.length - 1];
    if (validateExtension.includes(extensionName)) {
        const workBook = xlsx_1.default.readFile(tempFilePath);
        const workBookSheets = workBook.SheetNames;
        const sheet = workBookSheets[0];
        const dataColumns = xlsx_1.default.utils.sheet_to_json(workBook.Sheets[sheet]);
        const campañas = yield Campaign_1.default.find();
        const campaña = campañas[campañas.length - 1];
        dataColumns.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const data = { Nombres: item.Nombres, Apellidos: item.Apellidos, Direcciones: item.Direcciones, Telefonos: item.Telefonos, Campaña: campaña._id };
            const crm = new Crm_1.default(data);
            yield crm.save();
            return data;
        }));
        yield (0, upload_1.subirArchivos)(file);
        return true;
    }
    return false;
});
exports.validateFile = validateFile;
