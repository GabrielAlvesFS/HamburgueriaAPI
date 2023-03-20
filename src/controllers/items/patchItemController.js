import { validate } from "./validators/patchItemValidator.js";
import { getItem, updateItem } from "../../services/items.js";

export default async (req, res, next) => {
  try {
    //Validation
    await validate(req.params, req.body)

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateItem(req.params.id, req.body)
    const itemUpdated = await getItem(req.params.id)

    res.status(200).send(itemUpdated)
    
  } catch (error) {
    // Throwing to error handler 
    next(error)

  }
}