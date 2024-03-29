import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {type: String, required: true},
  imgUrl: {type: String}, 
  active: {type: Boolean, required: true}
}, {timestamps: true})

const category = mongoose.model('Category', categorySchema);

export default category;