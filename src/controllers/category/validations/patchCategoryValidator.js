import patchCategoryValidatorSchema from "./schemas/patchCategoryValidatorSchema.js";
import { getCategory } from "../../../services/category.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params, body) => {
  try {
    //Validation with ZOD
    patchCategoryValidatorSchema.parse({...params, ...body})

    // Verifying if category exists
    const category = await getCategory(params.id)
    if (!category) throw new NotFoundError("The ID of this category doesn't exist!", "id")

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}