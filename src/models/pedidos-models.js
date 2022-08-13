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

export default Pedidos;