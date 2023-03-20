import patchComplementValidatorSchema from "./schemas/patchComplementValidatorSchema.js";
import { getComplement } from "../../../services/complement.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params, body) => {
  try {
    // Validation with ZOD
    patchComplementValidatorSchema.parse({...params, ...body})
  
    // Verifying if complement exists
    const complement = await getComplement(params.id)
    if (!complement) throw new NotFoundError("The ID of this complement doesn't exist!", "id")

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}