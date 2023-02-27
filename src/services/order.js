import orderModel from "../models/orderModel.js";

// POST
export const postOrder = async (data) => {
  return await orderModel.create(data);
}

// GET
export const listOrders = async(query) => {
  return await orderModel.find(query);
}

export const getOrder = async (id) => {
  return await orderModel.findById(id);
}

// PUT AND PATCH
export const updateOrder = async (id, data) => {
  return await orderModel.findOneAndUpdate({_id: id}, { $set: {...data}}, {returnDocument: 'after'})
}