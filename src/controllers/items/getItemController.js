import getItemValidator from "./validators/getItemValidator.js";
import { getItem } from "../../services/items.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    getItemValidator.parse(req.params.id)

    // Verifying if Item exists
    const data = await getItem(req.params.id)
    if (!data) throw new NotFoundError("The ID of this item doesn't exist!", "id")

    //If ID exists, it will send the data
    res.status(200).send(data)
    
  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}