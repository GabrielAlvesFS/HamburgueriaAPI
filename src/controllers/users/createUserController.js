import createUserValidator from "./validators/createUserValidator.js"
import { createUser } from "../../services/users.js"
import { logger } from "../../config/logger.js"
import { hashValue } from "../../utils/bcrypt.js"

export default async (req, res) => {
  try {
    // validação com o ZOD
    createUserValidator.parse(req.body)

    // bcrypt
    const user = req.body
    user.password = await hashValue(user.password)

    // Fazendo o metodo POST
    const data = await createUser(user)
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}