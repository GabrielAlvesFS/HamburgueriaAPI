import { listAddresses } from "../../services/address.js";
import { getUser } from "../../services/users.js";
import listAddressesValidator from "./validations/listAddressesValidator.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    listAddressesValidator.parse(req.query)

    if (req.query?.userId) {
      const user = await getUser(req.query.userId)
      if (!user) throw new NotFoundError("This user doesn't exist!", "userId")
    }

    const data = await listAddresses(req.query)
    if (!data[0]) throw new NotFoundError("This user doesn't have an address!", "userId")

    res.status(200).send(data)
    
  } catch (error) {
    next(error)
    
  }
}