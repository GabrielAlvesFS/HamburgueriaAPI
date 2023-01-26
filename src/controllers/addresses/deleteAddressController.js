import { deleteAddress } from "../../services/address.js";
import deleteAddressValidator from "./validations/deleteAddressValidator.js";

export default async (req, res, next) => {
  try {
    deleteAddressValidator.parse(req.params.id)

    const data = await deleteAddress({
      _id: req.params.id
    })
    res.status(200).send(data)
    
  } catch (error) {
    next(error)

  }
}