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
  const {cpf, nome, email, data_nascimento, telefone, endereco} = req.body;
  const dataC = new ClientesM(cpf, nome, email, data_nascimento, telefone, endereco)
    try {
      const Cliente = await insertCliente(dataC)
      res.status(200).json(Cliente)
    } catch (error) {
      res.status(400).json({
        "msg" : error.message,
        "erro" : "true"
      })
    }
  }

  export const atualizaCliente = async (req, res) => {

    const id = +req.params.id
    const {cpf, nome, email, data_nascimento, telefone, endereco} = req.body;
    const dataC = new ClientesM(cpf, nome, email, data_nascimento, telefone, endereco)
    
    try {
      const Cliente = await updateCliente(dataC, id)
      res.status(200).json(Cliente)
    } catch (error) {
      res.status(400).json({
        "msg" : error.message,
        "erro" : "true"
      })
    }
  }

  export const deletaCliente  = async (req, res) => {
    const id = req.params.id
    try {
      const Cliente = await deleteCliente(id)
      res.status(200).json(Cliente)
    } catch (error) {
      res.status(400).json({
        "msg" : error.message,
        "erro" : "true"
      })
    }
  }

