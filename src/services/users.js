import userModel from "../models/userModel.js";

// POST
export const postUser = async(data) => {
  return await userModel.create(data);
}

// GET
export const listUsers = async(query, filter) => {
  return await userModel.find(query).select(filter);
}

export const getUser = async (id, filter) => {
  return await userModel.findById(id).select(filter);
}

// PUT e PATCH
export const updateUser = async (id, data, filter) => {
  return await userModel.findOneAndUpdate({_id: id}, { $set: {...data} }).select(filter);
}

// DELETE
export const deleteUser = async (id) => {
  return await userModel.deleteOne(id)
}