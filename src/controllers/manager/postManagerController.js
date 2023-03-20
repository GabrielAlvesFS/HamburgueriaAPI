import postManagerValidator from "./validators/postManagerValidator.js";
import { postManager } from "../../services/manager.js";
import { hashValue } from "../../utils/bcrypt.js";

export default async (req, res, next) => {
  try {
    // Validation with zod
    postManagerValidator.parse(req.body)

    // bcrypt
    const manager = req.body
    manager.password = await hashValue(manager.password)

    const data = await postManager(manager)
    delete data._doc.password
    res.send(data)
    
  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}