import { application } from "express";
import db from "../database/database.js";

export const listarEntregadores = () => {
    const query = "SELECT * FROM ENTREGADORES;"
    return new Promise((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve(rows)
            }
        });
    });
}

export const listarEntregador = (id) => {
    const query = `SELECT * FROM ENTREGADORES WHERE ID = ?;`
    return new Promise((resolve, reject) => {
        db.get(query, id, (error, rows) => {
            if(error) {
                reject(error)
            } else if ((!rows) || rows.length <= 0) {
                reject({
                    "message": 'Entregador não encontrado',
                    "status": 400,
                    "erro": true
                })
            } else {
                resolve(rows)
            }
        })
    })
}


export const criarEntregador = (entregador) => {
    const query = `INSERT INTO ENTREGADORES ( nome, cpf, telefone)
    VALUES (?, ?, ?)`
    return new Promise((resolve, reject) => {
        db.run(query, Object.values(entregador), (error, rows) => {
            if(error){
                reject(error)
            } else {
                resolve({
                    "msg": "Pessoa entregadora inserida com sucesso!",
                    "pedido": rows,
                    "erro": false
                })
            }
        })
    })
}























//export const postarEntregadores = async(req, res) => {
//    const nome = req.body.nome;
//    res.status(200).send({message:"cadastro feito"})
//}