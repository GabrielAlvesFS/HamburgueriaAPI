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


export const atualizarEntregador = (novo, id) => {
    const query =`UPDATE ENTREGADORES SET nome = ?, cpf = ?, telefone = ? WHERE id = ${id}`
   
    return new Promise( (resolve, reject) => {
        db.run(query, Object.values(novo), (error) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(`Pessoa entregadora de id ${id} atualizada com sucesso!`)
                }
            }
        )
    })  
}

export const deletarEntregadores = (id) => {
    const query = `DELETE FROM ENTREGADORES WHERE id = ${id}`
   
    return new Promise((resolve, reject) => {
        db.run(query, (error) => {
            if (error) {
                reject(error)
            } else {
                resolve(`Pessoa entregadora de id ${id} deletada com sucesso`)
            }
        })
    })
}
