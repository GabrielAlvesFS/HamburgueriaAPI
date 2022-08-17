import {Item, getItens, getItemId, postItem, deleteItem, updateItem} from '../models/item-models.js'

export const listarItens = async (req, res) => {
    try {
        const Itens = await getItens()
        res.status(200).json(Itens)
    }
    catch(error) {
        res.status(400).send('Não foi possível listar os itens.')
    }
}

export const listarItemId = async (req, res) => {
    const id = req.params.id
    try {
        const Item = await getItemId(id)
        res.status(200).send(Item)
    }
    catch(error) {
        res.status(400).send("Não foi possível encontrar o item.")
    }
}

export const cadastrarItem = async (req, res) => {
    const {tipo, nome, descricao, valor, url_img} = req.body
    const itemData = new Item(tipo, nome, descricao, valor, url_img)
    try {
        const novoItem = await postItem(itemData)
        res.status(200).send(novoItem)
    }
    catch(error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        })
    }
}

export const deletarItem = async (req, res) => {
    const id = req.params.id
    try {
        const itemDeletado = await deleteItem(id)
        res.status(200).send('Item deletado com sucesso.')
    }
    catch {
        res.status(400).send('Não foi possível deletar o item.')
    }
}

export const atualizarItem = async (req, res) => {
    const id = req.params.id
    const {tipo, nome, descricao, valor, url_img} = req.body
    const novosDados = new Item(tipo, nome, descricao, valor, url_img) 
    try {
        const atualizado = await updateItem(novosDados, id)
        res.status(200).send(atualizado)
    }
    catch(error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        })
    }
}