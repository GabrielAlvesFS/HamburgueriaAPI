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