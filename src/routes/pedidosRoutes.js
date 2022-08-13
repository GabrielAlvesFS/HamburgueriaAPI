import express from "express";
import { listarPedidos } from "../controllers/pedidos-controller.js";

const router = express.Router();

router
    .get("/pedidos", listarPedidos)
    
export default router;   