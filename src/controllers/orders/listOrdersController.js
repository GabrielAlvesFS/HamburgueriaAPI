import { listOrders } from "../../services/order.js"
import { NotFoundError } from "../../utils/errorHandler.js"

export default async (req, res, next) => {
  try {
    const data = await listOrders()
    if (!data[0]) throw new NotFoundError("Doesn't exist an order", [])

    res.status(200).send(data)
    
  } catch (error) {
    next(error)
    
  }
}