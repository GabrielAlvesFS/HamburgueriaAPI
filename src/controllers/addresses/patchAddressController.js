import { updateAddress } from "../../services/address.js";
import { getAddress } from "../../services/address.js";
import patchAddressValidator from "./validations/patchAddressValidator.js";
import { NotFoundError } from "../../utils/errorHandler.js";


export default async (req, res, next) => {
  try {
    patchAddressValidator.parse({...req.params, ...req.body})

    const address = await getAddress(req.params.id)
    if (!address) throw new NotFoundError("The ID of this address doesn't exist!", "id")

    const data = await updateAddress(req.params.id, req.body)
    res.status(200).send(data)
    
  } catch (error) {
    next(error)

  }
}