import { listarItensPedidos, listarItensPedido, cadastrarItemPedido, somaItensPedido, alterarItemPedido, removerItemPedido } from "../DAO/itemPedidoDAO.js";
import { validaIDs, validaQTD } from "../services/validacao-itemPedidos.js";

export class ItemPedido {
    constructor(pedido_id, item_id, quantidade_itens){
        this.pedido_id = pedido_id;
        this.item_id = item_id;
        this.quantidade_itens = quantidade_itens;
    }
}

export const getItensPedidos = async () => {
    try {
        const dados = await listarItensPedidos()
        if (!dados) throw new Error("Não foi possível encontrar os itens dos pedidos")
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

export const postItensPedido = async (itemPedido) => {
    try {
        const pedido_id = Object.values(itemPedido)[0]
        const item_id = Object.values(itemPedido)[1]
        const quantidade_itens = Object.values(itemPedido)[2]

        validaIDs(pedido_id)
        validaIDs(item_id)
        console.log(quantidade_itens)
        validaQTD(quantidade_itens)

        const newItemPedido = await cadastrarItemPedido(itemPedido)
        if (!newItemPedido) throw new Error("Não foi possível cadastrar o Item do pedido")
        return newItemPedido
    } catch (error) {
        throw error
    }
}

export const somaPedido = async (pedido_id) => {
    try {
        const soma = await somaItensPedido(pedido_id)
        if (!soma) throw new Error("Não foi possível cadastrar o Item do pedido")
        return soma
    } catch (error) {
        throw error
    }
}

export const putItensPedido = async (novoValor, itemPedido_id) => {
    try {
        const newItemPedido = await alterarItemPedido(novoValor, itemPedido_id)
        if (!newItemPedido) throw new Error("Não foi possível atualizar o Item do pedido")
        return newItemPedido
    } catch (error) {
        throw error
    }
}

export const deleteItensPedido = async (itemPedido_id) => {
    try {
        const delItemPedido = await removerItemPedido(itemPedido_id)
        if (!delItemPedido) throw new Error("Não foi possível deletar o Item do pedido")
        return delItemPedido
    } catch (error) {
        throw error
    }
}