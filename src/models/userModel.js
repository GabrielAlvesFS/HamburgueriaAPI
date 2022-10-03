import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {type: String},
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  birthDate: {type: Date, required: true},
  cpf: {type: String, unique: true},
  phone: {type: String},
  addresId: {type: String},
  paymentsId: {type: String},
}, {timestamps: true})

const user = mongoose.model('User', userSchema)

export default user 