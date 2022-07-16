import { Request, Response } from "express";
import Campaña from "../models/Campaña";

export const getCampañas = async (req: Request, resp: Response) => {
  const campañas = await Campaña.find()
  return resp.send({campañas})
}

export const getCampaña = async (req: Request, resp: Response) => {
  const {id} = req.params
  const campaña = await Campaña.findById(id)
  if(!campaña) return resp.send({error: 'La campaña no se encuentra registrada'})
  return resp.send({campaña})
}