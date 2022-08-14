import express from 'express';
import { listarItensPedido } from "../controllers/itemPedido-controller.js";

const router = express.Router()

router
    .get("/itemPedido", listarItensPedido)

export default router    