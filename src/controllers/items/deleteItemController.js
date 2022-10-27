import { logger } from "../../config/logger.js";
import { getItem, deleteItem } from "../../services/items.js";
import deleteItemValidator from "./validators/deleteItemValidator.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    deleteItemValidator.parse(req.params.id)

    // Verifying if Item exists
    const item = await getItem(req.params.id)
    if (!item) throw new Error("Item not found!")

    //If ID exists, the item will be deleted
    const data = await deleteItem({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    if (error.message === "Item not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send({error: error.issues})
    logger.info(error)
    res.status(500).send({ error: "Internal error"})
  }
}