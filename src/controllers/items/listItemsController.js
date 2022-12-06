import listItemsValidator from "./validators/listItemsValidator.js";
import { listItems } from "../../services/items.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD -> only filter by type, name or value
    listItemsValidator.parse(req.query)

    const data = await listItems(req.query);
    if (!data[0]) throw new NotFoundError("Item not found!", [])
    res.send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}