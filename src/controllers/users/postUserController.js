import postUserValidator from "./validators/createUserValidator.js"
import { postUser } from "../../services/users.js"
import { logger } from "../../config/logger.js"
import { hashValue } from "../../utils/bcrypt.js"

export default async (req, res) => {
  try {
    // validação com o ZOD
    postUserValidator.parse(req.body)

    // bcrypt
    const user = req.body
    user.password = await hashValue(user.password)

    // Fazendo o metodo POST
    const data = await postUser(user)
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}