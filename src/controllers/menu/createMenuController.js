import createMenuValidator from "./validators/createMenuValidator.js"
import { createMenu } from "../../services/menu.js"
import { logger } from "../../config/logger.js"

export default async (req, res) => {
  try {
    // validação com o ZOD
    createMenuValidator.parse(req.body)
    // Fazendo o metodo POST
    const data = await createMenu(req.body)
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}