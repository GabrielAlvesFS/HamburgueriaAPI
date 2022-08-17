import express from "express";
import { atualizaCliente, deletaCliente, insereCliente, recebeCliente, recebeClientes, } from "../controllers/clientes-controller.js";

const router = express.Router();

router
    .get("/clientes", recebeClientes )
    .get("/clientes/:id", recebeCliente)
    .post("/clientes", insereCliente)
    .put("/clientes/:id", atualizaCliente)
    .delete("/clientes/:id", deletaCliente)
    
export default router;   