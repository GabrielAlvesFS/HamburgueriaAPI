import listManagersValidator from "./validators/listManagersValidator.js";
import { listManagers } from "../../services/manager.js";
import { logger } from "../../config/logger.js"

export default async (req, res) => {
  try {
    // Validation with ZOD
    listManagersValidator.parse(req.body)

    // Verifying if user exists


    const data = await listManagers(req.body)
    res.status(200).send(data)

  } catch (error) {
    if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}