import { logger } from "../../config/logger.js";
import { getItem } from "../../services/items.js";
import getItemValidator from "./validators/getItemValidator.js";

export default async (req, res) => {
  try {
    // Validation with ZOD
    getItemValidator.parse(req.params.id)

    // Verifying if Item exists
    const data = await getItem(req.params.id)
    if (!data) throw new Error("The ID of this item doesn't exist!")

    //If ID exists, it will send the data
    res.status(200).send(data)
  } catch (error) {
    if (error?.message === "The ID of this item doesn't exist!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}