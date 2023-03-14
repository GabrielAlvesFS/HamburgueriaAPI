import deleteUserValidatorSchema from "./schemas/deleteUserValidatorSchema.js";
import { getUser } from "../../../services/users.js";
import { NotFoundError } from "../../../utils/errorHandler.js";

export const validate = async (params) => {
  try {
    //Zod Validation
    deleteUserValidatorSchema.parse(params.id)

    //Verifying if user exists
    const user = await getUser(params.id)
    if (!user) throw new NotFoundError("This user doesn't exist!", "id")

    return user

  } catch (error) {
    // Throwing error to controller
    throw error

  }
}