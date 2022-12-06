import postItemValidator from "./validators/postItemValidator.js";
import { postItem } from "../../services/items.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    postItemValidator.parse(req.body)
    
    // POST method
    const data = await postItem(req.body)
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}