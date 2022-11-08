import { listItems } from "../../services/items.js";
import listItemsValidator from "./validators/listItemsValidator.js";

// Adicionar todos os req.query nos lists (GET)
export default async (req, res, next) => {
  try {
    // Validation with ZOD -> only filter by type, name or value
    listItemsValidator.parse(req.query)

    const data = await listItems(req.query);
    if (!data[0]) throw new Error("notFound")
    res.send(data)

  } catch (error) {

    next(error)

  }
}