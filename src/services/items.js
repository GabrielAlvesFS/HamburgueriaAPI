import itemModel from "../models/itemModel.js";

// POST
export const postItem = async(data) => {
  return await itemModel.create(data);
}

//GET
export const listItems = async(query) => {
  return await itemModel.find(query)
}