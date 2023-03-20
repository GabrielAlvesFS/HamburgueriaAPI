import { deletePayment, getPayment } from "../../services/payment.js";
import deletePaymentValidator from "./validators/deletePaymentValidator.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    deletePaymentValidator.parse(req.params.id)

    const payment = await getPayment(req.params.id)
    if (!payment) throw new NotFoundError("This payment doesn't exist!", "id")
    
    const data = await deletePayment({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    next(error)
    
  }
}