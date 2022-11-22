import { validate } from "./validations/deleteComplementValidator.js";
import { deleteComplement } from "../../services/complement.js";

export default async (req, res, next) => {
  try {
    // Validations
    await validate(req.params)

    // If the complement passes the validations it will be deleted
    const data = await deleteComplement({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}