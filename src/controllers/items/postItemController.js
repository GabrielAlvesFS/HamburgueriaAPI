import postItemValidator from "./validators/postItemValidator.js"
import { postItem } from "../../services/items.js"
import { logger } from "../../config/logger.js"

export default async (req, res) => {
  try {
    // Validation with ZOD
    postItemValidator.parse(req.body)
    
    // POST method
    const data = await postItem(req.body)
    res.status(200).send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}