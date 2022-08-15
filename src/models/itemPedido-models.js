import { listarItensPedidos, listarItensPedido, cadastrarItemPedido, somaItensPedido, alterarItemPedido } from "../DAO/itemPedidoDAO.js";

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

export const putItensPedido = async (novoValor, id) => {
    try {
        const newItemPedido = await alterarItemPedido(novoValor, id)
        if (!newItemPedido) throw new Error("Não foi possível atualizar o Item do pedido")
        return newItemPedido
    } catch (error) {
        throw error
    }
}