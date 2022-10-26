import mongoose from "mongoose";
const { Schema } = mongoose;

const menuSchema = new Schema ({
  type: {type: String, required: true},
  name: {type: String, required: true},
  description: {type: String},
  value: {type: String, required: true},
  imgUrl: {type: String, required: true},
}, {timestamps: true})

const menu = mongoose.model('Menu', menuSchema)

export default menu