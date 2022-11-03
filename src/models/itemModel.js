import mongoose from "mongoose";
const { Schema } = mongoose;

const itemSchema = new Schema ({
  categoryID: {type: String, required: true},
  active: {type: Boolean, required: true},
  name: {type: String, required: true},
  description: {type: String},
  value: {type: String, required: true},
  imgUrl: {type: String, required: true},
  complementsIDs: {type: Array}
}, {timestamps: true})

const item = mongoose.model('Item', itemSchema)

export default item;