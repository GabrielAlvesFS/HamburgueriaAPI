 import db from "../database/sqlite-db.js"
 import { recebeCliente, recebeClientes, insereCliente, atualizaCliente, deletaCliente } from "../DAO/clientesDAO.js"
 
 class ClientesM {
    constructor(id_cliente, cpf, nome, email, telefone, endereco) {
        this.id_cliente = id_cliente;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}

export const getClientes = async () => {
    try {
        const dados = await recebeClientes(db)
        if (!dados) throw new Error("Não foi possivel encontrar os dados dos clientes")
        return dados 
    } catch (error) {
        throw error 
    }
}

export const getClienteById = async (id_cliente) => {
    try {
        const dados = await recebeCliente(db)
        if (!dados) throw new Error("Não foi possivel encontrar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}



export const insertCliente = async () => {
    try {
        const dados = await insereCliente(db)
        if (!dados) throw new Error("Não foi possivel inserir dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}

export const updateCliente = async () => {
    try {
        const dados = await atualizaCliente(db)
        if (!dados) throw new Error("Não foi possivel atualizar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}


export const deleteCliente = async () => {
    try {
        const dados = await deletaCliente(db)
        if (!dados) throw new Error("Não foi possivel deletar os dados do cliente")
        return dados 
    } catch (error) {
        throw error 
    }
}



export default ClientesM
