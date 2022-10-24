import { getUser } from "../../services/users.js";
import { logger } from "../../config/logger.js";
import getUserValidator from "./validators/getUserValidator.js"

export default async (req, res) => {
  try {
    //Zod Validation
    getUserValidator.parse(req.params.id)
  
    //GET with ID
    const data = await getUser(req.params.id, "-password")

    //Verifying if ID exists
    if (!data) throw new Error("ID not found!")

    //If ID exists, it will send the data
    res.send(data)

  } catch (error) {
    if (error?.message === "ID not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}