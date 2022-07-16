import { Request, Response } from "express";
import Campaign from "../models/Campaign";

export const getCampaigns = async (req: Request, resp: Response) => {
  const campañas = await Campaign.find()
  return resp.send({campañas})
}

export const getCampaign = async (req: Request, resp: Response) => {
  const {id} = req.params
  const campaña = await Campaign.findById(id)
  if(!campaña) return resp.send({error: 'La campaña no se encuentra registrada'})
  return resp.send({campaña})
}