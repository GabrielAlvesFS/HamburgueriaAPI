import { validate } from "./validators/postItemValidator.js";
import { postItem } from "../../services/items.js";

export default async (req, res, next) => {
  try {
    await validate(req.body)
    
    // POST method
    const data = await postItem(req.body)
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}