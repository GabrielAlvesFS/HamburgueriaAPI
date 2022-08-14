import { getItensPedidos, getItensPedido } from "../models/itemPedido-models.js";

export const listarItensPedidos = async (req, res) => {
    try {
        const ItensPedidos = await getItensPedidos()
        res.status(200).json(ItensPedidos)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const listarItensPedido = async (req, res) => {
    const pedidoId = req.params.pedido_id

    try {
        const ItensPedido = await getItensPedido(pedidoId)
        res.status(200).json(ItensPedido)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}