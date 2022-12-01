import listCategoriesValidator from "./validations/listCategoriesValidator.js";
import { listCategories } from "../../services/category.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    listCategoriesValidator.parse(req.query)

    // Verifying if category exists
    const data = await listCategories(req.query);
    if (!data[0]) throw new NotFoundError("Category not found!", [])

    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}