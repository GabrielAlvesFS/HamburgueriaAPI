export const validaIDs = (id) => {
    if (!id || isNaN(id)) throw new Error("id inválido: Envie um ID Válido")
}

export const validaQTD = (qtd) => {
    if (!qtd || isNaN(qtd)) throw new Error("Quantidade inválida: Envie uma quantidade válida!")
}