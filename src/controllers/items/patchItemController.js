import { logger } from "../../config/logger.js";
import { getItem, updateItem } from "../../services/items.js";
import patchItemValidator from "./validators/patchItemValidator.js";

export default async (req, res) => {
  try {
    // Validation with zod
    patchItemValidator.parse({...req.params, ...req.body})

    // Verifying if Item exists
    const item = await getItem(req.params.id)
    if (!item) throw new Error("Item not found!")

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateItem(req.params.id, req.body)
    res.status(200).send(data)
    
  } catch (error) {
    if (error?.message === "Item not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}