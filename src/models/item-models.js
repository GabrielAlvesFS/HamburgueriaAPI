import {listarItens, listarItemId, cadastrarItem, deletarItem, atualizarItem} from '../DAO/itemDAO.js'

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
        if(!deletedItem) throw new Error ("Não foi possível deletar o item.")
        return deletedItem
    }
    catch(error) {
        throw error
    }
}

export const updateItem = async (id, novosDados) => {
    try {
        const dadoAtualizado = await atualizarItem(id, novosDados)
        return dadoAtualizado
    }
    catch(error) {
        throw error
    }
}