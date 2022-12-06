import getUserValidator from "./validators/getUserValidator.js"
import { getUser } from "../../services/users.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    //Zod Validation
    getUserValidator.parse(req.params.id)
  
    //GET with ID
    const data = await getUser(req.params.id, "-password")

    //Verifying if ID exists
    if (!data) throw new NotFoundError("The ID of this user doesn't exist!", "id")

    //If ID exists, it will send the data
    res.send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}