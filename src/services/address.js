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

// PUT AND PATCH
export const updateAddress = async (id, data) => {
  return await addressModel.updateOne({_id: id}, { $set: {...data}})
}

// DELETE
export const deleteAddress = async (id) => {
  return await addressModel.deleteOne(id)
}