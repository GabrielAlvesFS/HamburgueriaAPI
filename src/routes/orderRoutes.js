import express from "express";
import postOrder from "../controllers/orders/postOrderController.js";


const router = express.Router();

router
    .post("/v1/order", postOrder)
    
export default router;