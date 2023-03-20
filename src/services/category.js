import categoryModel from "../models/categoryModel.js";

// POST
export const postCategory = async (data) => {
  return await categoryModel.create(data);
}

// GET
export const listCategories = async (query) => {
  return await categoryModel.find(query);
}

export const getCategory = async (id) => {
  return await categoryModel.findById(id);
}

// PUT AND PATCH
export const updateCategory = async (id, data) => {
  return await categoryModel.updateOne({_id: id}, { $set: {...data}})
}

// DELETE
export const deleteCategory = async (id) => {
  return await categoryModel.deleteOne(id)
}