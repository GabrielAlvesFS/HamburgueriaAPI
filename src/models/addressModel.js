import mongoose from "mongoose";
const { Schema } = mongoose;

const addressSchema = new Schema({
  userId: {type: String, required: true},
  AddressLabel: {type: String, required: true},
  city: {type: String, required: true},
  postcode: {type: String, required: true},
  state: {type: String, required: true},
  streetName: {type: String, required: true},
  streetNumber: {type: String, required: true}
}, {timestamps: true})

const address = mongoose.model('Address', addressSchema)

export default address;