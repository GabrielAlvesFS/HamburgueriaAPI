import { validate } from "./validators/patchManagerValidator.js";
import { getManager, updateManager } from "../../services/manager.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    await validate(req.params, req.body)

    //Updating Manager
    if (req.body.id) delete req.body.id

    const data = await updateManager(req.params.id, req.body)
    const managerUpdated = await getManager(req.params.id)

    res.status(200).send(managerUpdated)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}