import listComplementsValidator from "./validations/listComplementsValidator.js";
import { listComplements } from "../../services/complement.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    listComplementsValidator.parse(req.body)

    // Veryfing if complement exists
    const data = await listComplements(req.body)
    if (!data[0]) throw new Error("Complement not found!")
    res.status(200).send(data)

  } catch (error) {
    logger.error(error)
    if (error.message === "Complement not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    res.status(500).send({error: "Internal error"})
  }
}