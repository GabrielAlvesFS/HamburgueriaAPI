import { validate } from "./validations/patchCategoryValidator.js";
import { getCategory, updateCategory } from "../../services/category.js";

export default async (req, res, next) => {
  try {
    // Validations
    await validate(req.params, req.body)

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateCategory(req.params.id, req.body)
    const categoryUpdated = await getCategory(req.params.id)

    res.status(200).send(categoryUpdated)

  } catch (error) { 
    // Throwing to error handler
    next(error)
    
  }
}