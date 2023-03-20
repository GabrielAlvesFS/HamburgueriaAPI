import { updateAddress } from "../../services/address.js";
import patchAddressValidator from "./validations/patchAddressValidator.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    patchAddressValidator.parse({...req.params, ...req.body})
    
    const updatedAddress = await updateAddress(req.params.id, req.payload.id, req.body)
    if (!updatedAddress) throw new NotFoundError("The ID of this address doesn't exist or you are trying to update an address who don't belongs you!", "id")

    res.status(200).send(updatedAddress)
    
  } catch (error) {
    next(error)

  }
}