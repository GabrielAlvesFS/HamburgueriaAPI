import deleteComplementValidator from "./validations/deleteComplementValidator.js";
import { getComplement, deleteComplement } from "../../services/complement.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    deleteComplementValidator.parse(req.params.id)

    // Verifying if complement exists
    const complement = await getComplement(req.params.id)
    if (!complement) throw new Error("Complement not found!")

    // If complement exists it will be deleted
    const data = await deleteComplement({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}