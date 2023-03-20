import { validate } from "./validators/deleteUserValidator.js";
import { deleteUser } from "../../services/users.js";
import { deleteAddress } from "../../services/address.js";

export default async (req, res, next) => {
  try {
    //Validation
    const userAfterValidated = await validate(req.params)

    if (req.payload?.id) {
      if (req.params.id !== req.payload.id) return res.status(401).send({message: "unathorized"})
    }
    
    if (userAfterValidated?.addressIds) {
      await Promise.all(
        userAfterValidated.addressIds.map(async currAddressId => {
          await deleteAddress(currAddressId, req.payload.id)
        })
      )
    }

    //If ID exists, the user will be deleted
    const data = await deleteUser({
      _id: req.params.id
    })
    res.send(data)

  } catch (error) {
    // Throwing to error handler
    next(error)

  }
}