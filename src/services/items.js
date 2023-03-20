import itemModel from "../models/itemModel.js";

// POST
export const postItem = async(data) => {
  return await itemModel.create(data);
}

//GET
export const listItems = async(query) => {
  return await itemModel.find(query)
}

export const getItem = async(id) => {
  return await itemModel.findById(id)
}

// PUT AND PATCH
export const updateItem = async(id, data) => {
  return await itemModel.updateOne({_id: id}, { $set: {...data} })
}

// DELETE
export const deleteItem = async(id) => {
  return await itemModel.deleteOne(id)
}