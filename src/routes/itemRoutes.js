import express from 'express'
import {listarItens, listarItemId, cadastrarItem, deletarItem, atualizarItem} from '../controllers/item-controller.js'

const router = express.Router()

router
    .get('/itens', listarItens)
    .get('/itens/:id', listarItemId)
    .post('/itens', cadastrarItem)
    .delete('/itens/:id', deletarItem)
    .put('/itens/:id', atualizarItem)

export default router