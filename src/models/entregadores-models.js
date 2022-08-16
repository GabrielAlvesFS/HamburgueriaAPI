import { listarEntregadores, listarEntregador, criarEntregador, atualizarEntregador } from "../DAO/entregadoresDAO.js"


export class Entregadores {
    constructor( nome, cpf, telefone){
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
    }
}

export const getEntregadores = async () => {
    try {
        const dados = await listarEntregadores()
        if (!dados) throw new Error("Não foi possível encontrar os entregadores")
        return dados
    } catch (error) {
        throw error
    }
} 

export const getEntregador = async (id) => {
    try {
        const dados = await listarEntregador(id)
        if(!dados) throw new Error("Não foi possível encontrar o entregador")
        return dados
    } catch (error) {
        throw error
    }
}


export const postEntregador =  async (entregador) => {
    try {
        const resposta = await criarEntregador(entregador)
        if(!resposta) throw new Error("Não foi possível cadastrar o entregador")
        return resposta
    } catch (error) {
        throw error
    }
}

export const putEntregador = async (entregador, id) => {
    try {
        const resposta = await atualizarEntregador(entregador, id)
        if(!resposta) throw new Error("Não foi possível atualizar!")
        return resposta
    } catch (error) {
        throw error
    }
}