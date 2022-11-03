import categoryModel from "../models/categoryModel.js";

// POST
export const postCategory = async (data) => {
  return await categoryModel.create(data);
}