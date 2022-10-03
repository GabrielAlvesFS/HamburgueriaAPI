import createUserValidator from "./validators/createUserValidator.js"
import { createUser } from "../../services/users.js"
import { logger } from "../../config/logger.js"

export default async (req, res) => {
  try {
    // validação com o ZOD
    createUserValidator.parse(req.body)
    // Fazendo o metodo POST
    const data = await createUser(req.body)
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}