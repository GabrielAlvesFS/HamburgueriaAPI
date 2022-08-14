import express from "express";
import { listarPedidos, listarPedido, cadastrarPedido, alterarPedido } from "../controllers/pedidos-controller.js";

const router = express.Router();

router
    .get("/pedidos", listarPedidos)
    .get("/pedidos/:id", listarPedido)
    .post("/pedidos", cadastrarPedido)
    .put("/pedidos/:id", alterarPedido)
    
export default router;   