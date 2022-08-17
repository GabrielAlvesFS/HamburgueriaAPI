export const validaTipo = (tipo) => {
    let tipoEnviado = tipo.toLowerCase()
    if (!(tipoEnviado === 'hambúrguer' || tipoEnviado === 'aperitivos' || tipoEnviado === 'sobremesa' || tipoEnviado === 'bebidas'))
        throw new Error("Tipo inválido. Selecione um dos tipos possíveis: hambúrguer, aperitivos, sobremesa ou bebidas.")
}

export const validaNome = (nome) => {
    if(nome.length < 5) {
        throw new Error("Seu nome deve ter ao menos 5 caracteres")
    }
}

export const validaDescricao = (descricao) => {
    if (!(typeof descricao == 'string'))
        throw new Error("Tipo inválido. A descrição deve ser um texto.")
}

export const validaValor = (valor) => {
    if (!(typeof valor == 'number'))
        throw new Error("Tipo inválido. O valor deve ser um número.")
}