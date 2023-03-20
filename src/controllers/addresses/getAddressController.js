import { getAddress } from "../../services/address.js";
import getAddressValidator from "./validations/getAddressValidator.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    getAddressValidator.parse(req.params.id)

    const data = await getAddress(req.params.id)
    if (!data) throw new NotFoundError("The ID of this address doesn't exist!", "id")

    res.status(200).send(data)
    
  } catch (error) {
    next(error)
    
  }
}