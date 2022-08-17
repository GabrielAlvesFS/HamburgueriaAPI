export const validaNome = (nome) => {
    if (!nome || nome.length < 4) throw new Error("nome inválido: Envie um NOME Válido")
}

export const validaTelefone = (telefone) => {
    if (!telefone || telefone.length !== 14) throw new Error("telefone inválido: Envie um TELEFONE Válido")
}

export const validaCpf = (cpf) => {
    if (!cpf || cpf.length !== 14) throw new Error("cpf inválido: Envie um CPF Válido")
}

