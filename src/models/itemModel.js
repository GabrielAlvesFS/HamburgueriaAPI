import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema ({
  type: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  value: {type: String, required: true},
  imgUrl: {type: String, required: true},
}, {timestamps: true})

const item = mongoose.model('Item', itemSchema)

export default item;