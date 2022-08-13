//import ClientesM from "../models/clientes-models.js"
import { getClientes, getClienteById, insertCliente, updateCliente, deleteCliente } from "../models/clientes-models.js"


export const recebeCliente = async(req, res) => {
    const id = req.params.id
    try {
        const Clientes = await getClienteById(id)
        res.status(200).json({Clientes})
    } catch {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const recebeClientes = async(req, res) => {
    try {
        const Cliente = await getClientes()
        res.status(200).json({Cliente})
    } catch {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const insereCliente = async (req, res) => {
    const body = req.body;
    try {
      const Cliente = await insertCliente(body)
      res.status(200).json({Cliente})
    } catch (error) {
      res.status(400).json({
        "msg" : error.message,
        "erro" : "true"
      })
    }
  }

  export const atualizaCliente = async (req, res) => {
    const body = req.body;
    const id = req.params.id
    try {
      const Cliente = await updateCliente(body, id)
      res.status(200).json({Cliente})
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
      res.status(200).json({Cliente})
    } catch (error) {
      res.status(400).json({
        "msg" : error.message,
        "erro" : "true"
      })
    }
  }

