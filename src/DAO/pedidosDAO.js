import db from "../database/database.js";

// Função com a query que retorna todos os pedidos
const listarPedidos = () => {
    const query = "SELECT * FROM PEDIDOS;"
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

//Função com a query que retorna um pedido especifico
const listarPedido = (id) => {
    const query = `SELECT * FROM PEDIDOS WHERE ID = ?;`
    return new Promise((resolve, reject) => {
        db.get(query, id, (error, rows) => {
            if(error) {
                reject(error)
            } else if ((!rows) || rows.length <= 0) {
                reject({
                    "message": 'Pedido não encontrado',
                    "status": 400,
                    "erro": true
                })
            } else {
                resolve(rows)
            }
        })
    })
}

const cadastrarPedido = (dadosPedido) => {
    const query = `INSERT INTO PEDIDOS (cliente_id, entregador_id, data_pedido, metodo_pagamento) VALUES (?, ?, ?, ?)`
    return new Promise ((resolve, reject) => {
        db.run(query, Object.values(dadosPedido), (error, rows) => {
            if (error) {
                reject(error)
            }
            else {
                resolve({
                    "msg": `Pedido cadastrado com sucesso!`,
                    "pedido": rows,
                    "erro": false
                })  
            }    
        })
    })
}

export { listarPedidos, listarPedido, cadastrarPedido };