import postCategoryValidator from "./validations/postCategoryValidator.js";
import { postCategory } from "../../services/category.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    postCategoryValidator.parse(req.body)

    // Post Method
    const data = await postCategory(req.body);
    res.status(200).send(data);

  } catch (error) {
    if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}