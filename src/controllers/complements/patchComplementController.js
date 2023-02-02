import { validate } from './validations/patchComplementValidator.js';
import { getComplement, updateComplement } from "../../services/complement.js";

export default async (req, res, next) => {
  try {
    // Validations
    await validate(req.params, req.body)

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateComplement(req.params.id, req.body)
    const complementUpdated = await getComplement(req.params.id)

    res.status(200).send(complementUpdated)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}