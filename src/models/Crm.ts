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
  Campaña: {
    type: Schema.Types.ObjectId,
    required: [true, 'La campaña es requerida']
  }
})

export default model('crm', CrmSchema)