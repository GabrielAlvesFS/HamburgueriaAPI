import { deleteAddress } from "../../services/address.js";
import { validate } from "./validations/deleteAddressValidator.js";
import { getUser, updateUser } from "../../services/users.js";

export default async (req, res, next) => {
  try {
    await validate(req.params)

    const data = await deleteAddress({
      _id: req.params.id
    })

    const user = await getUser(req.payload.id, "-password")
    
    const address = user.addressIds.filter((address) => {
      if (address !== req.params.id) {
        return address
      }
    })

    const newAddress = await updateUser(req.payload.id, {addressIds: address})

    res.status(200).send(data)
    
  } catch (error) {
    next(error)

  }
}