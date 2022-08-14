import { listarItensPedidos, listarItensPedido } from "../DAO/itemPedidoDAO.js";

export class ItemPedido {
    constructor(pedido_id, item_id, quantidade_itens){
        this.pedido_id = pedido_id;
        this.item_id = item_id;
        this,quantidade_itens = quantidade_itens;
    }
}

export const getItensPedidos = async () => {
    try {
        const dados = await listarItensPedidos()
        if (!dados) throw new Error("Não foi possível encontrar os itens do pedido")
        return dados
    } catch (error) {
        throw(error)
    }
}

export const getItensPedido = async (pedido_id) => {
    try {
        const dados = await listarItensPedido(pedido_id)
        if (!dados) throw new Error("Não foi possível encontrar os itens do pedido")
        return dados
    } catch (error) {
        throw(error)
    }
}