import { validate } from './validations/patchComplementValidator.js';
import { updateComplement } from "../../services/complement.js";

export default async (req, res, next) => {
  try {
    // Validations
    await validate(req.params, req.body)

    //Removing id from body if exists
    if (req.body.id) delete req.body.id

    const data = await updateComplement(req.params.id, req.body)
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}