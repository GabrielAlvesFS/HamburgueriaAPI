import express from "express";
import { listarPedidos, listarPedido } from "../controllers/pedidos-controller.js";

const router = express.Router();

router
    .get("/pedidos", listarPedidos)
    .get("/pedidos/:id", listarPedido)
    
export default router;   