import user from "../models/userModel.js";

// POST
export const createUser = async(data) => {
  return await user.create(data);
}

// GET
export const findUser = async(query) => {
  return await user.find(query);
}

export const getUser = async (id) => {
  return await user.findById(id);
}

// PUT e PATCH
export const updateUser = async (id, data) => {
  return await user.updateOne({_id: id}, { $set: {...data} });
}

// DELETE
export const deleteUser = async (id) => {
  return await user.deleteOne(id)
}