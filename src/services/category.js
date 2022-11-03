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