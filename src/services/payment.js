import paymentModel from "../models/paymentModel.js";

// POST
export const postPayment = async (data) => {
  return await paymentModel.create(data);
}