import { Entregadores, getEntregadores, getEntregador, postEntregador, putEntregador, deleteEntregador  } from "../models/entregadores-models.js";

export const listarEntregadores = async (req, res) => {
    try {
        const Entregadores = await getEntregadores()
        res.status(200).json(Entregadores)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}

export const listarEntregador = async (req, res) => {
    const id = req.params.id
    try {
        const Entregador = await getEntregador(id)
        res.status(200).json(Entregador)
    } catch (error) {
        res.status(400).json({
            "msg" : error.message,
            "erro" : "true"
        });
    }
}


export const criarEntregador = async (req, res) => {
    const {nome, cpf, telefone} = req.body
    const dataE = new Entregadores(nome, cpf, telefone)
    try {
      const resposta = await postEntregador(dataE)
      res.status(200).json(resposta)

    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true
      })
    }
  }

  export const atualizarEntregador = async (req, res) => {
    const {nome, cpf, telefone} = req.body
    const dataE = new Entregadores(nome, cpf, telefone)
    const id = req.params.id    
    try {
      const resposta = await putEntregador(dataE, id)
      res.status(200).json(resposta)
    } catch (error) {
      res.status(404).json({
        "mensagem": error.message,
        "erro": true
      })
    }
  }

  export const deletarEntregador = async (req, res) => {
    try {
      const id = +req.params.id
      const resposta = await deleteEntregador(id)
      res.status(200).json(resposta)
    } catch (error) {
      res.status(400).json({
        "mensagem": error.message,
        "erro": true
      })
    }
  }