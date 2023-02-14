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

// PUT AND PATCH
export const updatePayment = async (id, data) => {
  return await paymentModel.findOneAndUpdate({_id: id}, { $set: {...data}}, {returnDocument: 'after'})
}

// DELETE
export const deletePayment = async (id) => {
  return await paymentModel.deleteOne(id)
}