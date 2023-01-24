import { postAddress } from "../../services/address.js";
import postAddressValidator from "./validations/postAddressValidator.js";


export default async (req, res, next) => { 

  try {
    req.body.userId = req.payload.id
    postAddressValidator.parse(req.body)

    const data = await postAddress(req.body)
    res.status(200).send(data)

  } catch (error) {
    next(error)

  }

}