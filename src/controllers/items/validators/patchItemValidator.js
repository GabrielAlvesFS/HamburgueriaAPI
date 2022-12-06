import patchItemValidatorSchema from "./schemas/patchItemValidatorSchema.js";
import { getItem } from "../../../services/items.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params, body) => {
  try {
    // Validation with zod
    patchItemValidatorSchema.parse({...params, ...body})

    // Verifying if Item exists
    const item = await getItem(params.id)
    if (!item) throw new NotFoundError("This item doesn't exist!", "id")

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}