import patchUserValidatorSchema from "./schemas/patchUserValidatorSchema.js";
import { getUser } from "../../../services/users.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params, body) => {
  try {
    //Zod Validation
    patchUserValidatorSchema.parse(...params, ...body)

    //Verifying if ID exists
    const user = await getUser(params.id)
    if (!user) throw new NotFoundError("This user doesn't exist!", "id")

  } catch (error) {
    // Throwing error to controller
    throw error
    
  }
}