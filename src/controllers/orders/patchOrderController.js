import { updateOrder } from "../../services/order.js"
import { validate } from "./validations/patchOrderValidator.js"

export default async (req, res, next) => {
  try {
    const orderStatus = await validate(req.body, req.params, req.payload)

    let id = {}
    if (req.payload?.id) id.userId = req.payload.id
    if (req.payload?.managerId) id.managerId = req.payload.managerId

    const newStatus = {
      status: {
        name: req.body.status.name,
        timestamp: new Date(),
        ...id,
        history: [
          ...orderStatus.history,
          {
            name: req.body.status.name,
            timestamp: new Date(),
            ...id,
          }
        ]
      }
    }

    const updatedOrder = await updateOrder(req.params.id, newStatus)
    res.status(200).send(updatedOrder)

  } catch (error) {
    next(error)

  }
}