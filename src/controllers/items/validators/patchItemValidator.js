import patchItemValidatorSchema from "./schemas/patchItemValidatorSchema.js";
import { getItem } from "../../../services/items.js";
import { getCategory } from "../../../services/category.js";
import { getComplement } from "../../../services/complement.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params, body) => {
  try {
    // Validation with zod
    patchItemValidatorSchema.parse({...params, ...body})

    // Verifying if Item exists
    const item = await getItem(params.id)
    if (!item) throw new NotFoundError("This item doesn't exist!", "id")

    if (body?.categoryId) { 
      const category = await getCategory(body.categoryId)
      if (!category) throw new NotFoundError("This category doesn't exist!", {categoryId: body.categoryId})
    }

    if (body?.complementsIds) {
      await Promise.all(
        body.complementsIds.map( async (id) => {
          const complement = await getComplement(id);
          if (!complement) throw new NotFoundError("This complement group doesn't exist!", {complementsIds: [id]})
        })
      )
    }

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}