import postItemValidatorSchema from "./schemas/postItemValidatorSchema.js";
import { getCategory } from "../../../services/category.js";
import { getComplement } from "../../../services/complement.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (body) => {
  try {
    postItemValidatorSchema.parse(body)

    const category = await getCategory(body.categoryId)
    if (!category) throw new NotFoundError("This category doesn't exist!", {categoryId: body.categoryId})

    if (body?.complementsIds) {
      await Promise.all(
        body.complementsIds.map( async (id) => {
          const complement = await getComplement(id);
          if (!complement) throw new NotFoundError("This complement group doesn't exist!", {complementsIds: [id]})
        })
      )
    }

  } catch (error) {
    throw error

  }
}