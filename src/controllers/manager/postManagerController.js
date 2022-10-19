import postManagerValidator from "./validators/postManagerValidator.js";
import { postManager } from "../../services/manager.js";
import { logger } from "../../config/logger.js"
import { hashValue } from "../../utils/bcrypt.js"

export default async (req, res) => {
  try {
    // Validation with zod
    postManagerValidator.parse(req.body)

    // bcrypt
    const manager = req.body
    manager.password = await hashValue(manager.password)

    const data = await postManager(manager)
    res.send(data)
    
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}