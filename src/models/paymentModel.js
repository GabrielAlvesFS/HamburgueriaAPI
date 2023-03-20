import mongoose from "mongoose";
const { Schema } = mongoose;

const paymentSchema = new Schema({
  label: {type: String},
  active: {type: Boolean}
}, {timestamps: true})

const payment = mongoose.model('Payment', paymentSchema)

export default payment;