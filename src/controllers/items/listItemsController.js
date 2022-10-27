import { listItems } from "../../services/items.js";
import listItemsValidator from "./validators/listItemsValidator.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    // Validation with ZOD -> only filter by type, name or value
    listItemsValidator.parse(req.body)

    const data = await listItems(req.body);
    if (!data[0]) throw new Error("Item not found!")
    res.send(data)

  } catch (error) {
    if (error.message === "Item not found!") return res.status(404).send({error: error.message})
    if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({error: "Internal error"})
  }
}