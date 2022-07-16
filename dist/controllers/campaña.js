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
exports.getCampaña = exports.getCampañas = void 0;
const Campa_a_1 = __importDefault(require("../models/Campa\u00F1a"));
const getCampañas = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const campañas = yield Campa_a_1.default.find();
    return resp.send({ campañas });
});
exports.getCampañas = getCampañas;
const getCampaña = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const campaña = yield Campa_a_1.default.findById(id);
    if (!campaña)
        return resp.send({ error: 'La campaña no se encuentra registrada' });
    return resp.send({ campaña });
});
exports.getCampaña = getCampaña;
