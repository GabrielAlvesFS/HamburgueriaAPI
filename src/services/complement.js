import complement from "../models/complementModel.js";

// POST
export const postComplement = async (data) => {
  return await complement.create(data);
}

// GET
export const listComplements = async (query) => {
  return await complement.find(query);
}

export const getComplement = async (id) => {
  return await complement.findById(id);
}

// PUT AND PATCH
export const updateComplement = async (id, data) => {
  return await complement.updateOne({_id: id}, {$set: {...data}});
}

// DELETE
export const deleteComplement = async (id) => {
  return await complement.deleteOne(id);
}