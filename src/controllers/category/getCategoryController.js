import getCategoryValidator from "./validations/getCategoryValidator.js";
import { getCategory } from "../../services/category.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    getCategoryValidator.parse(req.params.id)

    // Verifying if category exists
    const data = await getCategory(req.params.id)
    if (!data) throw new NotFoundError("The ID of this category doesn't exist!", "id")
    
    //If ID exists, it will send the data
    res.status(200).send(data)
    
  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}