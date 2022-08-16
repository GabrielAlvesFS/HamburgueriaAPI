import db from '../database/database.js'

const listarItens = () => {
    const query = 'SELECT * FROM ITEM;'
    return new Promise ((resolve, reject) => {
        db.all(query, (error, rows) => {
            if (error) {
                reject(error)
            }
            resolve(rows)
        })
    })
}

const listarItemId = (id) => {
    const query = 'SELECT * FROM ITEM WHERE ID = ?;'
    return new Promise ((resolve, reject) => {
        db.get(query, id, (error, rows) => {
            if (error) {
                reject(error)
            }
            else if((!rows) || rows.length <= 0) {
                reject(error)
            }
            resolve(rows)
        })
    })
}

const cadastrarItem = (dadosItem) => {
    const query = 'INSERT INTO ITEM (tipo, nome, descricao, valor, url_img) VALUES (?, ?, ?, ?, ?);'
    return new Promise ((resolve, reject) => {
        db.run(query, Object.values(dadosItem), (error, rows) => {
            if (error) {
                reject(error)
            }
            resolve("Item cadastrado com sucesso.")
        })
    })
}

const deletarItem = (id)  => {
    const query = 'DELETE FROM ITEM WHERE ID = ?;'
    return new Promise ((resolve, reject) => {
        db.run(query, id, (error, rows) => {
            if (error) {
                reject(error)
            }
            else if((!rows) || rows.length <= 0) {
                reject(error)
            }
            resolve("Item deletado com sucesso.")
        })
    })
}

const atualizarItem = (id, novosDados) => {
    const query = `UPDATE ITEM SET tipo = ?, nome = ?, descricao = ?, valor = ?, url_img = ? WHERE ID = ${id};`
    return new Promise ((resolve, reject) => {
        db.run(query, Object.values(novosDados), (error, rows) => {
            if (error) {
                reject(error)
            }
            else if((!rows) || rows.length <= 0) {
                reject(error)
            }
            resolve("Item atualizado com sucesso.")
        })
    })
}

export {listarItens, listarItemId, cadastrarItem, deletarItem, atualizarItem}