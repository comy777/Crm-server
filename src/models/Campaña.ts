import {Schema, model} from 'mongoose'

const CampañaSchema = new Schema({
  campaña: {
    type: String,
    required: [true, "El tipo de campaña es requerido"]
  }
})

CampañaSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

export default model('campaña', CampañaSchema)