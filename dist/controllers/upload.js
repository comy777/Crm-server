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
exports.getDataCrm = exports.uploadFile = void 0;
const Crm_1 = __importDefault(require("../models/Crm"));
const validateFile_1 = require("../utils/validateFile");
const uploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.send({ error: "No hay archivos para subir" });
    }
    if (!req.files.file) {
        return res.send({ msg: "No hay archivos para subir" });
    }
    try {
        const { file } = req.files;
        const validate = (0, validateFile_1.validateFile)(file);
        if (!validate)
            return res.send({ error: 'Error al subir el archivo' });
        return res.send({ msg: 'Archivo guardado con exito' });
    }
    catch (error) {
        console.log(error);
        res.send({
            error: "Error del servidor",
        });
    }
});
exports.uploadFile = uploadFile;
const getDataCrm = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield Crm_1.default.find();
    return resp.send({ results: data });
});
exports.getDataCrm = getDataCrm;
