import postUserValidator from "./validators/postUserValidator.js"
import { postUser } from "../../services/users.js"
import { hashValue } from "../../utils/bcrypt.js"

export default async (req, res, next) => {
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
    // Throwing to error handler
    next(error)

  }
}