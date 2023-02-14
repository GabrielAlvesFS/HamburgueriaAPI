import { deletePayment } from "../../services/payment.js";
import deletePaymentValidator from "./validators/deletePaymentValidator.js";

export default async (req, res, next) => {
  try {
    deletePaymentValidator.parse(req.params.id)
    
    const data = await deletePayment({
      _id: req.params.id
    })
    res.status(200).send(data)

  } catch (error) {
    next(error)
    
  }
}