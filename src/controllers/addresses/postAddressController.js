import { postAddress } from "../../services/address.js";
import postAddressValidator from "./validations/postAddressValidator.js";
import { getUser, updateUser } from "../../services/users.js";


export default async (req, res, next) => { 

  try {
    req.body.userId = req.payload.id
    postAddressValidator.parse(req.body)

    const data = await postAddress(req.body)

    const user = await getUser(req.body.userId, "-password")

    const address = {
      addressIds: [...user.addressIds, data._id]
    }

    const addAddress = await updateUser(req.body.userId, address)

    res.status(200).send(data)

  } catch (error) {
    next(error)

  }

}