import db from "../database/database.js";

const listarItensPedidos = () => {
    const query = `SELECT * FROM ITEM_PEDIDO;`
    return new Promise ((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error) {
                reject(error)
            } 
            else {
                resolve(rows)
            }
        })
    })
}

const listarItensPedido = (pedido_id) => {
    const query = `SELECT * FROM ITEM_PEDIDO WHERE PEDIDO_ID = ?`
    return new Promise ((resolve, reject) => {
        db.all(query, pedido_id, (error, rows) => {
            if (error) {
                reject(error)
            } else if ((!rows) || rows.length <= 0) {
                reject({
                    "message": 'Itens do Pedido não encontrado',
                    "status": 400,
                    "erro": true
                })
            }
            else {
                resolve(rows)
            }
        })
    })
}

const somaItensPedido = (pedido_id) => {
    const query = `
    SELECT SUM((item_pedido.quantidade_itens * item.valor)) AS Total_Pedido FROM ITEM_PEDIDO 
        INNER JOIN ITEM ON ITEM_PEDIDO.item_id = ITEM.id 
        WHERE PEDIDO_ID = ?`

    return new Promise ((resolve, reject) => {
        db.all(query, pedido_id, (error, rows) => {
            if (error) {
                reject(error)
            } else if ((!rows) || rows.length <= 0) {
                reject({
                    "message": 'Itens do Pedido não encontrado',
                    "status": 400,
                    "erro": true
                })
            }
            else {
                resolve(rows)
            }
        })
    })
} 

//toda vez que cadastrar ou alterar um item pedido tem que atualizar o valor da tabela de pedidos com o id do pedido


export {listarItensPedidos, listarItensPedido, somaItensPedido}