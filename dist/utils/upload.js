"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subirArchivos = void 0;
//const { v4: uuidv4 } = require("uuid");
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const subirArchivos = (data, extensionesValidas = ["csv"], carpeta = "") => {
    return new Promise((resolve, reject) => {
        const { name } = data;
        const nombreCortado = name.split(".");
        const extension = nombreCortado[nombreCortado.length - 1];
        //Validar la extension
        if (!extensionesValidas.includes(extension)) {
            reject(`La extension ${extension} no es permitidad`);
        }
        const nomTemp = (0, uuid_1.v4)() + "." + extension;
        const uploadPath = path_1.default.join(__dirname, "../uploads/", carpeta, nomTemp);
        data.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }
            resolve(nomTemp);
        });
    });
};
exports.subirArchivos = subirArchivos;
