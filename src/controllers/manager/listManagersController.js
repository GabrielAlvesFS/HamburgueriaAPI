import listManagersValidator from "./validators/listManagersValidator.js";
import { listManagers } from "../../services/manager.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    listManagersValidator.parse(req.body)

    // Verifying if manager exists
    const manager = await listManagers(req.body, "-password")
    if (!manager.length) throw new Error("Manager not found!")

    res.status(200).send(manager)

  } catch (error) {
    if (error?.message === "Manager not found!") return res.status(404).send({error: error.message})
    if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}