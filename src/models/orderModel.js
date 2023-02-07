import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema ({
  userData: {type: Object, required: true},
  items: {type: Array, required: true},
  amount: {type: Number, required: true},
  address: {type: Object, required: true}
}, {timestamps: true})

const order = mongoose.model('Order', orderSchema)

export default order;