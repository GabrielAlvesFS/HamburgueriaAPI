
 import {recebeCliente, recebeClientes, insereCliente, atualizaCliente, deletaCliente } from "../DAO/clientesDAO.js"
 
 export class ClientesM {
    constructor(id, cpf, nome, email, data_nascimento, telefone, endereco) {
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}

export const getClientes = async () => {
    try {
        const dados = await recebeClientes()
        if (!dados) throw new Error("Não foi possivel encontrar os dados dos clientes")
        return dados 
    } catch (error) {
        throw error 
    }
}

export const getClienteById = async (id) => {
    try {
        const dados = await recebeCliente(id)
        if (!dados) throw new Error("Não foi possivel encontrar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}



export const insertCliente = async (dadosCliente) => {
    try {
        const dados = await insereCliente(dadosCliente)
        if (!dados) throw new Error("Não foi possivel inserir dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}

export const updateCliente = async (novosDadosCliente) => {
    try {
        const dados = await atualizaCliente(novosDadosCliente)
        if (!dados) throw new Error("Não foi possivel atualizar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}


export const deleteCliente = async (id) => {
    try {
        const dados = await deletaCliente(id)
        if (!dados) throw new Error("Não foi possivel deletar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}



export default ClientesM
