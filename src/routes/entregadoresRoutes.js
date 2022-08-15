import express from "express";
import { listarEntregadores, listarEntregador, criarEntregador } from "../controllers/entregadores-controllers.js";

const router = express.Router()

router 
    .get("/entregadores", listarEntregadores)
    .get("/entregadores/:id", listarEntregador)
    .post("/entregadores", criarEntregador)

export default router