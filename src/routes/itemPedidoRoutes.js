import express from 'express';
import { listarItensPedidos, listarItensPedido } from "../controllers/itemPedido-controller.js";

const router = express.Router()

router
    .get("/itemPedido", listarItensPedidos)
    .get("/itemPedido/:pedido_id", listarItensPedido)

export default router    