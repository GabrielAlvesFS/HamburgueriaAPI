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

const cadastrarItemPedido = (itemPedido) => {
    const query = `INSERT INTO ITEM_PEDIDO (pedido_id, item_id, quantidade_itens) VALUES (?, ?, ?)`

    return new Promise ((resolve, reject) => {
        db.run(query, Object.values(itemPedido), (error) => {
            if (error) {
                reject(error)
            }
            else {
                resolve({
                    "msg": `Item do Pedido cadastrado com sucesso!`,
                    "erro": false
                })  
            }
        } )
    })
}

export {listarItensPedidos, listarItensPedido, somaItensPedido, cadastrarItemPedido}