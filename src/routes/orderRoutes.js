import express from "express";
import checkAuth from "../middlewares/checkAuth.js";
import postOrder from "../controllers/orders/postOrderController.js";
import listOrders from "../controllers/orders/listOrdersController.js";
import getOrder from "../controllers/orders/getOrderController.js";
import patchOrder from "../controllers/orders/patchOrderController.js";


const router = express.Router();

router
    .post("/v1/order", checkAuth("customer"), postOrder)
    .get("/v1/order", checkAuth("manager"), listOrders)
    .get("/v1/order/:id", checkAuth("customer", "manager"), getOrder)
    .patch("/v1/order/:id", checkAuth("customer", "manager"), patchOrder)

export default router;