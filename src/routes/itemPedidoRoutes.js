import express from 'express';
import { listarItensPedidos, listarItensPedido, cadastrarItemPedido, atualizarItensPedido, removerItensPedido} from "../controllers/itemPedido-controller.js";

const router = express.Router()

router
    .get("/itemPedido", listarItensPedidos)
    .get("/itemPedido/:pedido_id", listarItensPedido)
    .post("/itemPedido", cadastrarItemPedido)
    .put("/itemPedido/:pedido_id/:id", atualizarItensPedido)
    .delete("/itemPedido/:pedido_id/:id", removerItensPedido)

export default router    