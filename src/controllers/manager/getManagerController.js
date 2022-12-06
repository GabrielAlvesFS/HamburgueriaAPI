import getManagerValidator from "./validators/getManagerValidator.js";
import { getManager } from "../../services/manager.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    //Zod Validation
    getManagerValidator.parse(req.params.id)
  
    //GET with ID
    const data = await getManager(req.params.id, "-password")

    //Verifying if ID exists
    if (!data) throw new NotFoundError("The ID of this manager doesn't exist!", "id")

    //If ID exists, it will send the data
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}