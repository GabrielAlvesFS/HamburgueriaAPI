import deleteUserValidator from "../users/validators/deleteUserValidator.js";
import { getManager, deleteManager } from "../../services/manager.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    deleteUserValidator.parse(req.params.id)

    // Verifying if Manager exists
    const manager = await getManager(req.params.id)
    if (!manager) throw new Error("Manager not found!")

    //If ID exists, the manager will be deleted
    const data = await deleteManager({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    if (error.message === "Manager not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.info(error)
    res.status(500).send({ error: "Internal error"})
  }
}