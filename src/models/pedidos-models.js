import { listarPedidos } from "../DAO/pedidosDAO.js";

class Pedidos {
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
        if (!dados) throw new Error("Não foi possível encontrar os dados dos pedidos")
        return dados
    } catch (error) {
        throw error
    }
}