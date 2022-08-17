import express from "express";
import { listarEntregadores, listarEntregador, criarEntregador, atualizarEntregador,deletarEntregador} from "../controllers/entregadores-controllers.js";

const router = express.Router()

router 
    .get("/entregadores", listarEntregadores)
    .get("/entregadores/:id", listarEntregador)
    .post("/entregadores", criarEntregador)
    .put("/entregadores/:id", atualizarEntregador)
    .delete("/entregadores/:id", deletarEntregador)
    
export default router