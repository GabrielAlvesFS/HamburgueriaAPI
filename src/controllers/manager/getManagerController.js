import getManagerValidator from "./validators/getManagerValidator.js";
import { getManager } from "../../services/manager.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    //Zod Validation
    getManagerValidator.parse(req.params.id)
  
    //GET with ID
    const data = await getManager(req.params.id)

    //Verifying if ID exists
    if (!data) throw new Error("ID not found!")

    //If ID exists, it will send the data
    res.status(200).send(data)

  } catch (error) {
    if (error?.message === "ID not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}