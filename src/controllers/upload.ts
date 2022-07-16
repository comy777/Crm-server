import { Request, Response } from "express";
import { validateFile } from '../utils/validateFile';

export const uploadFile = async (req: Request, res: Response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.send({ error: "No hay archivos para subir" });
  }
  if (!req.files.file) {
    return res.send({ msg: "No hay archivos para subir" });
  }
  try {
    const { file } = req.files;
    const validate = validateFile(file)
    if(!validate) return res.send({error: 'Error al subir el archivo'})
    return res.send({ msg: 'Archibo guardao con exito' });
  } catch (error) {
    console.log(error);
    res.send({
      error: "Error del servidor",
    });
  }
};