import ClientesM from "../models/clientes-models.js"
import { recebeCliente, recebeClientes, insereCliente, atualizaCliente, deletaCliente } from "../DAO/clientesDAO.js"

const clientesC = (app, db) => {

    app.get('/clientes', (req, res) => {
        recebeClientes(db)
        .then((sucess) => res.status(200).json(sucess))
        .catch((erro) => res.sendStatus(400))
    })

    app.get('/clientes/:id', (req, res) => {
        recebeCliente(db)
        .then((sucess) => res.status(200).json(sucess))
        .catch((erro) => res.sendStatus(400))
    })

    app.post('/clientes', (req, res) => {
        const {id_cliente, cpf, nome, email, telefone, endereco} = req.body;
        insereCliente(db)
        .then((sucess) => res.status(200).json(sucess))
        .catch((erro) => res.sendStatus(400))
    })

    app.put('/clientes/:id', (req, res) => {
        atualizaCliente(db)
        .then((sucess) => res.status(200).json(sucess))
        .catch((erro) => res.sendStatus(400))
    })

    app.delete('/clientes/:id', (req, res) => {
        deletaCliente(db)
        .then((sucess) => res.status(200).json(sucess))
        .catch((erro) => res.sendStatus(400))
    })



}

export default clientesC