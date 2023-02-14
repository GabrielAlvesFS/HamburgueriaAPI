import { listPayments } from "../../services/payment.js";
import listPaymentsValidator from "./validators/listPaymentsValidator.js"
import { NotFoundError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    if (req.query.active === "true") req.query.active = true
    if (req.query.active === "false") req.query.active = false

    listPaymentsValidator.parse(req.query)
    
    const data = await listPayments(req.query)
    if (!data[0]) throw new NotFoundError("This payment doesn't exist!", "label")

    res.status(200).send(data)

  } catch (error) {
    next(error)
    
  }
}