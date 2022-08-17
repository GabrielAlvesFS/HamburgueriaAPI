//import ClientesM from "../models/clientes-models.js"
import { ClientesM, getClientes, getClienteById, insertCliente, updateCliente, deleteCliente } from "../models/clientes-models.js"


export const recebeCliente = async(req, res) => {
    const id = req.params.id
    try {
        const Clientes = await getClienteById(id)
        res.status(200).json(Clientes)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const recebeClientes = async(req, res) => {

    try {
        const Cliente = await getClientes()
        res.status(200).json(Cliente)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const insereCliente = async (req, res) => {
  const {nome, cpf,  data_nascimento,  telefone, email, endereco} = req.body;
  const dataC = new ClientesM(nome, cpf,  data_nascimento,  telefone, email, endereco)
    try {
      const insCliente = await insertCliente(dataC)
      res.status(200).json(insCliente)
    } catch (error) {
      res.status(400).json({
        "msg" : error
      })
    }
  }

  export const atualizaCliente = async (req, res) => {

    const id = +req.params.id
    const {nome, cpf,  data_nascimento,  telefone, email, endereco} = req.body;
    const dataC = new ClientesM(nome, cpf,  data_nascimento,  telefone, email, endereco)
    
    try {
      const upCliente = await updateCliente(dataC, id)
      res.status(200).json(upCliente)
    } catch (error) {
      res.status(400).json({
        "msg" : error.message,
        "erro" : "true"
      })
    }
  }

  export const deletaCliente  = async (req, res) => {
    const id = +req.params.id
    try {
      const delCliente = await deleteCliente(id)
      res.status(200).send(delCliente)
    } catch (error) {
      res.status(400).json({
        "msg" : error,
        "erro" : "true"
      })
    }
  }

