import mongoose from "mongoose";
const { Schema } = mongoose;

const managerSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
}, {timestamps: true})

const manager = mongoose.model('Manager', managerSchema)

export default manager