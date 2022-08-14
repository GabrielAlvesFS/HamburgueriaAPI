import { Pedidos, getPedidos, getPedido, postPedido, putPedido } from "../models/pedidos-models.js";


export const listarPedidos = async (req, res) => {
   try {
        const Pedidos = await getPedidos();
        res.status(200).json(Pedidos)
   } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
   }
}

export const listarPedido = async (req, res) => {
    const id = req.params.id

    try {
        const Pedido = await getPedido(id)
        res.status(200).json(Pedido)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const cadastrarPedido = async (req, res) => {
    const {cliente_id, data_pedido, metodo_pagamento} = req.body
    const dataP = new Pedidos(cliente_id, 0, data_pedido, metodo_pagamento)

    try {
        const newPedido = await postPedido(dataP) 
        res.status(201).send(newPedido)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const alterarPedido = async (req, res) => {
    const id = +req.params.id
    const {entregador_id, status_pedido, metodo_pagamento} = req.body
    const dataP = new Pedidos(entregador_id, status_pedido, metodo_pagamento)
    // console.log(datap)
    // const body = req.body

    try {
        const updPedido = await putPedido(id, dataP)
        res.status(200).json(updPedido)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}