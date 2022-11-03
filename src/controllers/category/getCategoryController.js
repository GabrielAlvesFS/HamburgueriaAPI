import getCategoryValidator from "./validations/getCategoryValidator.js";
import { getCategory } from "../../services/category.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    getCategoryValidator.parse(req.params.id)

    // Verifying if category exists
    const data = await getCategory(req.params.id)
    if (!data) throw new Error("Category not found!")
    
    res.status(200).send(data)
    
  } catch (error) {
    if (error.message === "Category not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}