import paymentModel from "../models/paymentModel.js";

// POST
export const postPayment = async (data) => {
  return await paymentModel.create(data);
}

// GET
export const getPayment = async (id) => {
  return await paymentModel.findById(id)
}

export const listPayments = async (query) => {
  return await paymentModel.find(query);
}