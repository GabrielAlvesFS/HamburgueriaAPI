import { listarPedidos, listarPedido, cadastrarPedido } from "../DAO/pedidosDAO.js";

export class Pedidos {
    constructor(cliente_id, entregador_id, data_pedido, status_pedido, valor_total, metodo_pagamento){
        this.cliente_id = cliente_id;
        this.entregador_id = entregador_id;
        this.data_pedido = data_pedido;
        this.status_pedido = status_pedido;
        this.valor_total = valor_total;
        this.metodo_pagamento = metodo_pagamento;
    }
}

export const getPedidos = async () => {
    try {
        const dados = await listarPedidos();
        if (!dados) throw new Error("Não foi possível encontrar os pedidos")
        return dados
    } catch (error) {
        throw error
    }
}

export const getPedido = async (id) => {
    try {
        const dados = await listarPedido(id);
        if (!dados) throw new Error("Não foi possível encontrar o pedido")
        return dados
    } catch (error) {
        throw error
    }
}

export const postPedido = async (dadosPedido) => {
    try {
        const newPedido = await cadastrarPedido(dadosPedido)
        if (!newPedido) throw new Error("Não foi possível cadastrar o seu pedido")
        return newPedido
    } catch (error) {
        throw error
    }
}