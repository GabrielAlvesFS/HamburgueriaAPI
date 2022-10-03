import menu from "../models/menuModel.js";

// POST
export const createMenu = async(data) => {
  return await menu.create(data);
}

//GET
export const findMenu = async(query) => {
  return await menu.find(query)
}