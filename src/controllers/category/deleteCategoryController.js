import { validate } from "./validations/deleteCategoryValidator.js";
import { deleteCategory } from "../../services/category.js";

export default async (req, res, next) => {
  try {
    // Validation
    await validate(req.params)

    // If the category passes the validations it will be deleted
    const data = await deleteCategory({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}