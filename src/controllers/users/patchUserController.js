import { validate } from "./validators/patchUserValidator.js"
import { updateUser } from "../../services/users.js";

export default async (req, res, next) => {
  try {
    //Validation
    await validate(req.params, req.body)
    
    //Updating User
    if (req.body.id) delete req.body.id
    if (req.payload?.id) {
      if (req.params.id !== req.payload.id) return res.status(401).send({message: "unathorized"})
    }

    const userUpdated = await updateUser(req.params.id, req.body, "-password")

    res.status(200).send(userUpdated)
    
  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}