import { validaIdCliente, validaCliente, validaSeTemDados } from "../services/validacao-clientes.js";
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
        const pegaClientes = await recebeClientes()
        if (!pegaClientes) throw new Error("Não foi possivel encontrar os dados dos clientes")
        return pegaClientes 
    } catch (error) {
        throw error 
    }
}

export const getClienteById = async (id) => {
    try {
        const pegaCliente = await recebeCliente(id)
        if (!pegaCliente) throw new Error("Não foi possivel encontrar os dados do cliente")
        validaIdCliente(id)
        validaSeTemDados(pegaCliente)
        return pegaCliente 
    } catch (error) {
        throw error 
    }
}



export const insertCliente = async (dadosCliente) => {
    try {
        const insCliente = await insereCliente(dadosCliente)
        if (!insCliente) throw new Error("Não foi possivel inserir dados do cliente")
        validaIdCliente(dadosCliente)
        validaSeTemDados(insCliente)
        return insCliente 
    } catch (error) {
        throw error 
    }
}

export const updateCliente = async (novosDadosCliente, id) => {
    try {
        validaIdCliente(id)
        const attCliente = await atualizaCliente(novosDadosCliente, id)
        if (!attCliente) throw new Error("Não foi possivel atualizar os dados do cliente")
        validaSeTemDados(attCliente)
        return attCliente 
    } catch (error) {
        throw error 
    }
}


export const deleteCliente = async (id) => {
    try {
        //await recebeCliente(id)
        validaIdCliente(id)
        const delCliente = await deletaCliente(id)
        if (!delCliente) throw new Error("Não foi possivel deletar os dados do cliente")
        validaSeTemDados(delCliente)
        return delCliente 
    } catch (error) {
        throw error 
    }
}

