import { validate } from "./validators/deleteItemValidator.js";
import { deleteItem } from "../../services/items.js";

export default async (req, res, next) => {
  try {
    // Validation
    await validate(req.params)

    //If ID exists, the item will be deleted
    const data = await deleteItem({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}