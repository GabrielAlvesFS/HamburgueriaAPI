import mongoose from "mongoose";
const { Schema } = mongoose;

const orderSchema = new Schema ({
  // user -> front/ back (tel do user)
  items: {type: Array, required: true}
  // total
}, {timestamps: true})

const order = mongoose.model('Order', orderSchema)

export default order;