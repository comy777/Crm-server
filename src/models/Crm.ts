import {Schema, model} from 'mongoose'

const CrmSchema = new Schema({
  Nombres: {
    type: String,
  },
  Apellidos: {
    type: String,
  },
  Direcciones: {
    type: String,
  },
  Telefonos: {
    type: String,
  },
})

export default model('crm', CrmSchema)