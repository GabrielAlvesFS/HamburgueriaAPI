import manager from "../models/managerModel.js";

// POST
export const postManager = async (data) => {
  return await manager.create(data);
}

// GET
export const listManagers = async (query) => {
  return await manager.find(query);
}

export const getManager = async (id) => {
  return await manager.findById(id);
}

// UPDATE
export const updateManager = async (id, data) => {
  return await manager.updateOne({_id: id}, { $set: {...data}})
}

// DELETE
export const deleteManager = async (id) => {
  return await manager.deleteOne(id)
}