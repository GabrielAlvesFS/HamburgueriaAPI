import postComplementValidator from "./validations/postComplementValidator.js";
import { postComplement } from "../../services/complement.js";
import { logger } from '../../config/logger.js'

export default async (req, res) => {
  try {
    // Validation with ZOD
    postComplementValidator.parse(req.body)

    // Post Method
    const data = await postComplement(req.body)
    res.status(200).send(data)

  } catch (error) {
    logger.error(error)
    if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    res.status(500).send({error: "Internal error"})
  }
}