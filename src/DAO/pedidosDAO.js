import db from "../database/database.js";

// Função com a query que retorna todos os pedidos
const listarPedidos = () => {
    const query = "SELECT * FROM PEDIDOS"
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



export { listarPedidos };