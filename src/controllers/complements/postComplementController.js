import postComplementValidator from "./validations/postComplementValidator.js";
import { postComplement } from "../../services/complement.js";

export default async (req, res, next) => {
  try {
    // Validation with ZOD
    postComplementValidator.parse(req.body)

    // Post Method
    const data = await postComplement(req.body)
    res.status(200).send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}