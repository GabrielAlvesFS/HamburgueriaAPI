import listManagersValidator from "./validators/listManagersValidator.js";
import { listManagers } from "../../services/manager.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    listManagersValidator.parse(req.query)

    // Verifying if manager exists
    const manager = await listManagers(req.query, "-password")
    if (!manager[0]) throw new NotFoundError("Manager not found!", [])

    res.status(200).send(manager)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}