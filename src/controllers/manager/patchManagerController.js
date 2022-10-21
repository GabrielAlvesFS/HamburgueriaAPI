import patchManagerValidator from "./validators/patchManagerValidator.js";
import { getManager, updateManager } from "../../services/manager.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    patchManagerValidator.parse({...req.params, ...req.body})

    // Verifying if Manager exists
    const manager = await getManager(req.params.id)
    if (!manager) throw new Error("Manager not found!")

    //Updating Manager
    if (req.body.id) delete req.body.id

    const data = await updateManager(req.params.id, req.body)
    res.status(200).send(data)

  } catch (error) {
    if (error?.message === "Manager not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.info(error)
    res.status(500).send({ error: "Internal error"})
  }
}