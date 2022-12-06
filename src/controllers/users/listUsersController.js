import { listUsers } from "../../services/users.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
  
    const user = await listUsers(req.query, "-password")
    if (!user[0]) throw new NotFoundError("User not found!", [])
    
    res.status(200).send(user)

  } catch (error) {
    // Throwing to error handler
    next(error)
    
  }
}