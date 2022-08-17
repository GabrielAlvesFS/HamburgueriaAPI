export const validaID = (id) => {
    if (!id || isNaN(id)) throw new Error("id inválido: Envie um ID Válido")
}

export const validaData = (data) => {
    data = new Date(data)
    if (!(data instanceof Date && !isNaN(data))) throw new Error("Data inválida! Digite uma data válida! Exemplo: 'YYYY-MM-DD' ")
}

export const validaMetodoPagamento = (metodo) => {
    if (!(metodo === 'débito' || metodo === 'crédito' || metodo === 'dinheiro' || metodo === 'pix'))
    throw new Error("Método de pagamento inválido. Selecione um dos métodos: débito, crédito, dinheiro ou pix! ")
}

export const validaStatus = (status) => {
    if (!(status === 'aberto' || status === 'andamento' || status === 'a caminho' || status === 'finalizado'))
    throw new Error("Status do pedido inválido. Selecione um dos status: aberto, andamento, a caminho ou finalizado! ")
}