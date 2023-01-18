import orderModel from "../models/orderModel.js";

// POST
export const postOrder = async (data) => {
  return await orderModel.create(data);
}