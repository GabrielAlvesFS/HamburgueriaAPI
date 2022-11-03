import getComplementValidator from "./validations/getComplementValidator.js";
import { getComplement } from "../../services/complement.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    getComplementValidator.parse(req.params.id)

    // Verifying if complement exists
    const data = await getComplement(req.params.id)
    if (!data) throw new Error("The ID of this complement doesn't exist!")

    //If ID exists, it will send the data
    res.status(200).send(data)

  } catch (error) {
    logger.error(error)
    if (error?.message === "The ID of this complement doesn't exist!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    res.status(500).send({error: "Internal error"})
  }
}