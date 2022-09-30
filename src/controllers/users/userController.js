import user from "../models/userModel.js";

export const getUser = async () => {
  const data = await user.find()
  return data
}