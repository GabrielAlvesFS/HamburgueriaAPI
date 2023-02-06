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
export const updateAddress = async (id, userId, data) => {
  return await addressModel.findOneAndUpdate({_id: id, ...(userId && {userId}) }, { $set: {...data}})
}

// DELETE
export const deleteAddress = async (id, userId) => {
  return await addressModel.deleteOne({_id: id, ...(userId && {userId}) })
}