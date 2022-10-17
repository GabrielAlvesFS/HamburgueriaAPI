import { updateUser } from "../../services/users.js";
import { getUser } from "../../services/users.js";
import { logger } from "../../config/logger.js";
import patchUserValidator from "./validators/patchUserValidator.js"

export default async (req, res) => {
  try {
    //Zod Validation
    patchUserValidator.parse({...req.params, ...req.body})
    
    //Verifying if ID exists
    const user = await getUser(req.params.id)
    if (!user) throw new Error("ID not found!")

    //Updating User
    if (req.body.id) delete req.body.id

    const data = await updateUser(req.params.id, req.body)
    res.send(data)
  } catch (error) {
    if (error?.message === "ID not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}