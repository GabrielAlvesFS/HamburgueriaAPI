import addressModel from "../models/addressModel.js";

// POST
export const postAddress = async (data) => {
  return await addressModel.create(data);
}