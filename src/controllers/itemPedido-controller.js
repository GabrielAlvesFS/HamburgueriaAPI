import { ItemPedido, getItensPedidos, getItensPedido, postItensPedido, somaPedido, putItensPedido, deleteItensPedido } from "../models/itemPedido-models.js";
import { putValorPedido } from "../models/pedidos-models.js";

export const listarItensPedidos = async (req, res) => {
    try {
        const ItensPedidos = await getItensPedidos()
        res.status(200).json(ItensPedidos)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const listarItensPedido = async (req, res) => {
    const pedidoId = req.params.pedido_id

    try {
        const ItensPedido = await getItensPedido(pedidoId)
        res.status(200).json(ItensPedido)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

//Quando se cadastra um novo item em um pedido, é atualizado o valor total do pedido
export const cadastrarItemPedido = async (req, res) => {
    const {pedido_id, item_id, quantidade_itens} = req.body
    const dataIP = new ItemPedido(pedido_id, item_id, quantidade_itens)

    try {
        const newItemPedido = await postItensPedido(dataIP) 
        res.status(201).send(newItemPedido)
        // totalPedido -> total dos itens do pedido especifico é atualizado quando cadastrado um novo pedido
        let totalPedido = await somaPedido(pedido_id)
        totalPedido = Object.values(totalPedido[0])
        totalPedido = totalPedido[0]
        
        //atualizando o valor total do pedido na tabela de pedidos com o id do pedido específico
        const updPedido = await putValorPedido(totalPedido, pedido_id)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const atualizarItensPedido = async (req, res) => {
    const {item_id, quantidade_itens} = req.body
    const pedido_id = +req.params.pedido_id
    const dataP = new ItemPedido(pedido_id, item_id, quantidade_itens)
    const itemPedido_id = +req.params.id

    try {
        const newItemPedido = await putItensPedido(dataP, itemPedido_id) 
        res.status(200).send(newItemPedido)
        
        // totalPedido -> total dos itens do pedido especifico é atualizado quando cadastrado um novo pedido
        let totalPedido = await somaPedido(pedido_id)
        totalPedido = Object.values(totalPedido[0])
        totalPedido = totalPedido[0]
    
        //atualizando o valor total do pedido na tabela de pedidos com o id do pedido específico
        const updPedido = await putValorPedido(totalPedido, pedido_id)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const removerItensPedido = async (req, res) => {
    const pedido_id = +req.params.pedido_id
    const itemPedido_id = +req.params.id

    try {
        const delItemPedido = await deleteItensPedido(itemPedido_id) 
        res.status(200).send(delItemPedido)

        // totalPedido -> total dos itens do pedido especifico é atualizado quando cadastrado um novo pedido
        let totalPedido = await somaPedido(pedido_id)
        totalPedido = Object.values(totalPedido[0])
        totalPedido = totalPedido[0]

        //atualizando o valor total do pedido na tabela de pedidos com o id do pedido específico
        const updPedido = await putValorPedido(totalPedido, pedido_id)
    } catch (error) {
        throw error
    }
}