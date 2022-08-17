import { listarPedidos, listarPedido, cadastrarPedido, alterarPedido, removerPedido, atualizarValorPedido } from "../DAO/pedidosDAO.js";

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

export const putPedido = async (id, novosDados) => {
    try {
        const updPedido = await alterarPedido(id, novosDados)
        return updPedido
    } catch (error) {
        throw error
    }
}

export const deletePedido = async (id) => {
    try {
        const delPedido = await removerPedido(id)
        return delPedido
    } catch (error) {
        throw error
    }
}

export const putValorPedido = async (valor, pedido_id) => {
    try {
        const updPedido = await atualizarValorPedido(valor, pedido_id)
        return updPedido
    } catch (error) {
        throw error
    }
}