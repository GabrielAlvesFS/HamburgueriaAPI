import listComplementsValidator from "./validations/listComplementsValidator.js";
import { listComplements } from "../../services/complement.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    listComplementsValidator.parse(req.query)

    // Verifying if exists complement
    const data = await listComplements(req.query)
    if (!data[0]) throw new NotFoundError("Complement not found!", [])

    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}