//const { v4: uuidv4 } = require("uuid");
import {v4 as uuidv4} from 'uuid'
import path from 'path'

export const subirArchivos = (
  data: any,
  extensionesValidas = ["csv"],
  carpeta = ""
) => {
  return new Promise((resolve, reject) => {
    const { name } = data;
    const nombreCortado = name.split(".");
    const extension = nombreCortado[nombreCortado.length - 1];
    //Validar la extension
    if (!extensionesValidas.includes(extension)) {
      reject(`La extension ${extension} no es permitidad`);
    }
    const nomTemp = uuidv4() + "." + extension;
    const uploadPath = path.join(__dirname, "../uploads/", carpeta, nomTemp);
    data.mv(uploadPath, (err : any) => {
      if (err) {
        reject(err);
      }
      resolve(nomTemp);
    });
  });
};
