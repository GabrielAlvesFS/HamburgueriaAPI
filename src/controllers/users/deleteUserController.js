import { getUser } from "../../services/users.js";
import { deleteUser } from "../../services/users.js";
import { logger } from "../../config/logger.js";
import deleteUserValidator from "./validators/deleteUserValidator.js";

export default async (req, res) => {
  try {
    //Zod Validation
    deleteUserValidator.parse(req.params.id)

    //Verifying if user exists
    const user = await getUser(req.params.id)
    if (!user) throw new Error("ID not found!")
    
    //If ID exists, the user will be deleted
    const data = await deleteUser({
      _id: req.params.id
    })
    res.send(data)

  } catch (error) {
    if (error?.message === "ID not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}