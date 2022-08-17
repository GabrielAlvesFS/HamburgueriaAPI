export const validaIdCliente = (id) => {
    if (isNaN(id)) {
        throw new Error("Id invalido.")
    }
}

export const validaSeTemDados = (dados) => {
    if (!dados) throw new Error("Cliente não encontrado")
}

export const validaCliente = (cliente) => {
    if (!cliente.nome || !cliente.cpf || !cliente.data_nascimento || !cliente.telefone || !email.nome || !endereco.nome) {
        throw new Error("Preencha todos os campos para prosseguir!")
    }
}

