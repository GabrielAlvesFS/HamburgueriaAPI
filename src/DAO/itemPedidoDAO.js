import db from "../database/database.js";

const listarItensPedido = () => {
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



export {listarItensPedido}