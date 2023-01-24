import express from "express";
import checkAuth from "../middlewares/checkAuth.js";
import postOrder from "../controllers/orders/postOrderController.js";


const router = express.Router();

router
    .post("/v1/order", checkAuth("customer"), postOrder)
    
export default router;