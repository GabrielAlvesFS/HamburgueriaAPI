import { getPayment } from "../../services/payment.js";
import getPaymentValidator from "./validators/getPaymentValidator.js";
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    getPaymentValidator.parse(req.params.id)

    const data = await getPayment(req.params.id)
    if (!data) throw new NotFoundError("The ID of this payment doesn't exist!", "id")

    res.status(200).send(data)
    
  } catch (error) {
    next(error)

  }
}