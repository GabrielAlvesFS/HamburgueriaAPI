import manager from "../models/managerModel.js";

// POST
export const postManager = async(data) => {
  return await manager.create(data);
}