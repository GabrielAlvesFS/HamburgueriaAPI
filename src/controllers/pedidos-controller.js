import { getPedidos } from "../models/pedidos-models.js";


export const listarPedidos = async (req, res) => {
   try {
        const Pedidos = await getPedidos();
        res.status(200).json({Pedidos})
   } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
   }
}