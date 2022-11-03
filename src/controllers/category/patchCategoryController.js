import patchCategoryValidator from "./validations/patchCategoryValidator.js";
import { getCategory, updateCategory } from "../../services/category.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    patchCategoryValidator.parse({...req.params, ...req.body})

    // Verifying if category exists
    const category = await getCategory(req.params.id)
    if (!category) throw new Error("Category not found!")

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateCategory(req.params.id, req.body)
    res.status(200).send(data)

  } catch (error) { 
    if (error.message === "Category not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}