import express from 'express';
import { listarItensPedidos, listarItensPedido, cadastrarItemPedido, atualizarItensPedido } from "../controllers/itemPedido-controller.js";

const router = express.Router()

router
    .get("/itemPedido", listarItensPedidos)
    .get("/itemPedido/:pedido_id", listarItensPedido)
    .post("/itemPedido", cadastrarItemPedido)
    .put("/itemPedido/:pedido_id/:id", atualizarItensPedido)
    //delete //tem que remover o valor do total (só usar dnv as funções)

export default router    