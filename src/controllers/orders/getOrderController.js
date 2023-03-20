import { getOrder } from "../../services/order.js"
import getOrderValidator from "./validations/getOrderValidator.js"
import { NotFoundError } from "../../utils/errorHandler.js"

export default async (req, res, next) => {
  try {
    getOrderValidator.parse(req.params.id)

    const data = await getOrder(req.params.id)
    if (!data) throw new NotFoundError("Doesn't exist an order with this id", {id: req.params.id})

    res.status(200).send(data)
    
  } catch (error) {
    next(error)
    
  }
}