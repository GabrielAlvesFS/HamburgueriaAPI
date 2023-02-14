import express from 'express';
import checkAuth from "../middlewares/checkAuth.js"
import postPayment from '../controllers/payment/postPaymentController.js';
import listPayments from '../controllers/payment/listPaymentsController.js';
import getPayment from '../controllers/payment/getPaymentController.js';
import patchPayment from '../controllers/payment/patchPaymentController.js';

const router = express.Router()

router
    .post("/v1/payment", checkAuth("manager"), postPayment)
    .get("/v1/payment", checkAuth("customer", "manager"), listPayments)
    .get("/v1/payment/:id", checkAuth("customer", "manager"), getPayment)
    .patch("/v1/payment/:id", checkAuth("customer", "manager"), patchPayment)

export default router;