import managerModel from "../models/managerModel.js";

// POST
export const postManager = async (data) => {
  return await managerModel.create(data);
}

// GET
export const listManagers = async (query, filter) => {
  return await managerModel.find(query).select(filter);
}

export const getManager = async (id, filter) => {
  return await managerModel.findById(id).select(filter);
}

// UPDATE
export const updateManager = async (id, data) => {
  return await managerModel.updateOne({_id: id}, { $set: {...data}})
}

// DELETE
export const deleteManager = async (id) => {
  return await managerModel.deleteOne(id)
}