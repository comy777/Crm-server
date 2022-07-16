import {subirArchivos} from './upload'
import XLSX from 'xlsx'
import Crm from '../models/Crm'
import Campaña from '../models/Campaña'

export const validateFile = async (file: any) =>{
  const {name, tempFilePath} = file
  const extension = name.split('.')
  const validateExtension = ['csv']
  const extensionName = extension[extension.length - 1]
  if(validateExtension.includes(extensionName)){
    const workBook = XLSX.readFile(tempFilePath)
    const workBookSheets = workBook.SheetNames;
    const sheet = workBookSheets[0]
    const dataColumns = XLSX.utils.sheet_to_json(workBook.Sheets[sheet])
    const campañas = await Campaña.find()
    const campaña = campañas[campañas.length - 1]
    dataColumns.map(async (item : any) => {
      const data = {Nombres: item.Nombres, Apellidos: item.Apellidos, Direcciones: item.Direcciones, Telefonos: item.Telefonos, Campaña: campaña._id}
      const crm = new Crm(data)
      await crm.save()
      return data
    })
    await subirArchivos(file)
    return true
  }
  return false  
}