import getComplementValidator from "./validations/getComplementValidator.js";
import { getComplement } from "../../services/complement.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    getComplementValidator.parse(req.params.id)

    // Verifying if complement exists
    const data = await getComplement(req.params.id)
    if (!data) throw new NotFoundError("The ID of this complement doesn't exist!", "id")

    //If ID exists, it will send the data
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}