import { validate } from "./validators/patchUserValidator.js"
import { getUser, updateUser } from "../../services/users.js";

export default async (req, res, next) => {
  try {
    //Validation
    await validate(req.params, req.body)
    
    //Updating User
    if (req.body.id) delete req.body.id

    const data = await updateUser(req.params.id, req.body)
    const userUpdated = await getUser(req.params.id, "-password")

    res.status(200).send(userUpdated)
    
  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}