import deleteComplementValidatorSchema from "./schemas/deleteComplementValidatorSchema.js";
import { getComplement } from "../../../services/complement.js";
import { listItems } from '../../../services/items.js';
import { NotFoundError, AssignmentError } from "../../../utils/errorHandler.js";

export const validate = async (params) => {
  try {
    //Validation with ZOD
    deleteComplementValidatorSchema.parse(params.id)

    // Verifying if complement exists
    const complement = await getComplement(params.id)
    if (!complement) throw new NotFoundError("This complement doesn't exist!", "id")

    // Verifying if complements aren't assigned to an item
    const data = await listItems({ complementsIds: params.id })
  
    if (data.length) throw new AssignmentError("You can only delete this complement when it is not assigned to an item", { items: data})

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}