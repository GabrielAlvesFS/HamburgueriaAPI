import deleteCategoryValidatorSchema from './schemas/deleteCategoryValidatorSchema.js';
import { getCategory } from '../../../services/category.js';
import { listItems } from '../../../services/items.js';
import { NotFoundError, AssignmentError } from "../../../utils/errorHandler.js";

//validações complexas
export const validate = async (params) => {
  try {
    //Validation with ZOD
    deleteCategoryValidatorSchema.parse(params.id)

    // Verifying if category exists
    const category = await getCategory(params.id)
    if (!category) throw new NotFoundError("This category doesn't exist!", "id")
    
    // Verifying if category aren't assigned to an item
    const data = await listItems({categoryId: params.id})

    if (data.length) throw new AssignmentError("You can only delete this category when it is not assigned to an item", { items: data})
  
  } catch (error) {
    // Throwing error to controller
    throw error

  }
}