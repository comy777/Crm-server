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
exports.getCampaign = exports.getCampaigns = void 0;
const Campaign_1 = __importDefault(require("../models/Campaign"));
const getCampaigns = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const campañas = yield Campaign_1.default.find();
    return resp.send({ campañas });
});
exports.getCampaigns = getCampaigns;
const getCampaign = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const campaña = yield Campaign_1.default.findById(id);
    if (!campaña)
        return resp.send({ error: 'La campaña no se encuentra registrada' });
    return resp.send({ campaña });
});
exports.getCampaign = getCampaign;
