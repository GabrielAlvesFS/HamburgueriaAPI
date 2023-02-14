import { postPayment } from "../../services/payment.js";
import postPaymentValidator from "./validators/postPaymentValidator.js";

export default async (req, res, next) => {
  try {
    postPaymentValidator.parse(req.body)

    const data = await postPayment(req.body)
    res.status(200).send(data)

  } catch (error) {
    next(error)

  }
}