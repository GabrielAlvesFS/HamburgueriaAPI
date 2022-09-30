import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {type: String},
  name: {type: String, required: true}
}, {timestamps: true})





const user = mongoose.model('User', userSchema)

// user.create({name: 'Gabriel'})

export default user 