import { listarItensPedido } from "../DAO/itemPedidoDAO.js";

export class ItemPedido {
    constructor(pedido_id, item_id, quantidade_itens){
        this.pedido_id = pedido_id;
        this.item_id = item_id;
        this,quantidade_itens = quantidade_itens;
    }
}

export const getItensPedido = async () => {
    try {
        const dados = await listarItensPedido()
        if (!dados) throw new Error("Não foi possível encontrar os itens do pedido")
        return dados
    } catch (error) {
        throw(error)
    }
}