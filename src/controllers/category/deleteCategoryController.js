import deleteCategoryValidator from "./validations/deleteCategoryValidator.js";
import { getCategory, deleteCategory } from "../../services/category.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    deleteCategoryValidator.parse(req.params.id)

    // Verifying if category exists
    const category = await getCategory(req.params.id)
    if (!category) throw new Error("Category not found");

    //If ID exists, the manager will be deleted
    const data = await deleteCategory({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    if (error.message === "Category not found") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}