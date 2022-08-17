import {listarItens, listarItemId, cadastrarItem, deletarItem, atualizarItem} from '../DAO/itemDAO.js'
import {validaTipo, validaNome, validaDescricao, validaValor} from '../services/validacao-item.js'

export class Item {
    constructor(tipo, nome, descricao, valor, url_imagem) {
        this.tipo = tipo, 
        this.nome = nome,
        this.descricao = descricao,
        this.valor = valor,
        this.url_img = url_imagem
    }
}

export const getItens = async () => {
    try {
        const dados = await listarItens()
        if (!dados) throw new Error("Não foi possível encontrar os itens")
        return dados
    }
    catch(error) {
        throw error
    }
}

export const getItemId = async (id) => {
    try {
        const dados = await listarItemId(id)
        if (!dados) throw new Error("Não foi possível encontrar o item.")
        return dados
    }
    catch(error) {
        throw error
    }
}

export const postItem = async (dadosItem) => {
    try {
        const tipo = Object.values(dadosItem)[0]
        const nome = Object.values(dadosItem)[1]
        const descricao = Object.values(dadosItem)[2]
        const valor = Object.values(dadosItem)[3]
        validaTipo(tipo)
        validaNome(nome)
        validaDescricao(descricao)
        validaValor(valor)
        const newItem = await cadastrarItem(dadosItem)
        if(!newItem) throw new Error("Não foi possível cadastrar o item.")
        return newItem
    }
    catch(error) {
        throw error
    }
}

export const deleteItem = async (id) => {
    try {
        const deletedItem = await deletarItem(id)
        return deletedItem
    }
    catch(error) {
        throw error
    }
}

export const updateItem = async (novosDados, id) => {
    try {
        const tipo = Object.values(novosDados)[0]
        const nome = Object.values(novosDados)[1]
        const descricao = Object.values(novosDados)[2]
        const valor = Object.values(novosDados)[3]
        validaTipo(tipo)
        validaNome(nome)
        validaDescricao(descricao)
        validaValor(valor)
        const dadoAtualizado = await atualizarItem(novosDados, id)
        return dadoAtualizado
    }
    catch(error) {
        throw error
    }
}