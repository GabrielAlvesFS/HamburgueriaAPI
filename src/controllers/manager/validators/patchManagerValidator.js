import patchManagerValidatorSchema from "./schemas/patchManagerValidatorSchema.js";
import { getManager } from "../../../services/manager.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params, body) => {
  try {
    // Validation with ZOD
    patchManagerValidatorSchema.parse({...params, ...body})

    // Verifying if Manager exists
    const manager = await getManager(params.id)
    if (!manager) throw new NotFoundError("This manager doesn't exist!", "id")

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}