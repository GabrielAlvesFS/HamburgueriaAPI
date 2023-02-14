import { updatePayment } from "../../services/payment.js"
import patchPaymentvalidator from "./validators/patchPaymentvalidator.js"
import { NotFoundError } from "../../utils/errorHandler.js"

export default async (req, res, next) => {
  try {
    patchPaymentvalidator.parse({...req.body, ...req.params})

    const updatedPayment = await updatePayment(req.params.id, req.body)
    if (!updatedPayment) throw new NotFoundError("The ID of this payment doesn't exist!", "id")

    res.status(200).send(updatedPayment)

  } catch (error) {
    next(error)

  }
}