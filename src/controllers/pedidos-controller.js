import { getPedidos, getPedido } from "../models/pedidos-models.js";


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