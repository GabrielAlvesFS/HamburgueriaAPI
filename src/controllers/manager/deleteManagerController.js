import { validate } from "./validators/deleteManagerValidator.js";
import { deleteManager } from "../../services/manager.js";

export default async (req, res, next) => {
  try {
    //Validation
    await validate(req.params)

    //If ID exists, the manager will be deleted
    const data = await deleteManager({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}