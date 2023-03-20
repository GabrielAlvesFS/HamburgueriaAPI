import mongoose from "mongoose";
const { Schema } = mongoose;

const complementSchema = new Schema({
  title: {type: String, required: true},
  items: {type: Array, required: true},
  required: {type: Boolean, required: true},
  min: {type: Number, default: 1},
  max: {type: Number, default: 1}
}, {timestamps: true})

const complement = mongoose.model('Complement', complementSchema)

export default complement;