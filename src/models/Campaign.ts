import {Schema, model} from 'mongoose'

const CampaignSchema = new Schema({
  campaign: {
    type: String,
    required: [true, "El tipo de campaña es requerido"]
  }
})

CampaignSchema.methods.toJSON = function () {
  const { __v, ...data } = this.toObject();
  return data;
};

export default model('campaña', CampaignSchema)