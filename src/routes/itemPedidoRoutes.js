import express from 'express';
import { listarItensPedidos, listarItensPedido, cadastrarItemPedido } from "../controllers/itemPedido-controller.js";

const router = express.Router()

router
    .get("/itemPedido", listarItensPedidos)
    .get("/itemPedido/:pedido_id", listarItensPedido)
    .post("/itemPedido", cadastrarItemPedido)
    //put
    //delete

export default router    