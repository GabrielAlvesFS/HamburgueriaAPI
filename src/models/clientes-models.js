
 import {recebeCliente, recebeClientes, insereCliente, atualizaCliente, deletaCliente } from "../DAO/clientesDAO.js"
 
 export class ClientesM {
    constructor( nome, cpf,  data_nascimento, telefone, email, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.telefone = telefone;
        this.email = email;  
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

export const updateCliente = async (novosDadosCliente, id) => {
    try {
        const dados = await atualizaCliente(novosDadosCliente, id)
        if (!dados) throw new Error("Não foi possivel atualizar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}


export const deleteCliente = async (id) => {
    try {
        //await recebeCliente(id)
        const dados = await deletaCliente(id)
        if (!dados) throw new Error("Não foi possivel deletar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}

