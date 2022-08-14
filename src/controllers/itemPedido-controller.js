import { getItensPedido } from "../models/itemPedido-models.js";

export const listarItensPedido = async (req, res) => {
    try {
        const ItensPedido = await getItensPedido()
        res.status(200).json(ItensPedido)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}