import postCategoryValidator from "./validations/postCategoryValidator.js";
import { postCategory } from "../../services/category.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    postCategoryValidator.parse(req.body)

    // Post Method
    const data = await postCategory(req.body);
    res.status(200).send(data);

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}