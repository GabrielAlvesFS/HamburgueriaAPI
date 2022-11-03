import patchComplementValidator from './validations/patchComplementValidator.js'
import { getComplement, updateComplement } from "../../services/complement.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    patchComplementValidator.parse({...req.params, ...req.body})

    // Verifying if complement exists
    const complement = await getComplement(req.params.id)
    if (!complement) throw new Error("Complement not found!")

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateComplement(req.params.id, req.body)
    res.status(200).send(data)

  } catch (error) {
    if (error?.message === "Complement not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}