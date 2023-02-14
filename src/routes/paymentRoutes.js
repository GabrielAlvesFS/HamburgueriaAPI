import express from 'express';
import checkAuth from "../middlewares/checkAuth.js"
import postPayment from '../controllers/payment/postPaymentController.js';

const router = express.Router()

router
    .post("/v1/payment", checkAuth("manager"), postPayment)

export default router;