import addressModel from "../models/addressModel.js";

// POST
export const postAddress = async (data) => {
  return await addressModel.create(data);
}

// GET
export const getAddress = async (id) => {
  return await addressModel.findById(id)
}

export const listAddresses = async (query) => {
  return await addressModel.find(query);
}