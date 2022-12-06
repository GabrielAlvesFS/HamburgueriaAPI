import { validate } from "./validators/patchItemValidator.js";
import { updateItem } from "../../services/items.js";

export default async (req, res, next) => {
  try {
    //Validation
    await validate(req.params, req.body)

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateItem(req.params.id, req.body)
    res.status(200).send(data)
    
  } catch (error) {
    // Throwing to error handler 
    next(error)

  }
}