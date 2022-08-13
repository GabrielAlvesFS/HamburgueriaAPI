import db from "../database/database.js"


// BUSCA CLIENTES POR ID


const recebeCliente = (id) => {
    return new Promise ((res, rej) => {
        db.get("SELECT * FROM CLIENTES WHERE CLIENTE_ID = ?", id, (erro, rows) => {
            if (erro) {
                rej(erro.message)
            } else {
                res(rows)
            }
        })
})
}

// BUSCA TODOS OS CLIENTES

 const recebeClientes = () => {
    return new Promise ((res, rej) => {
        db.all("SELECT * FROM CLIENTES", (erro, rows) => {
            if (erro) {
                rej(erro.message)
            } else {
                res(rows)
            }
        })
})
}

// INSERE CLIENTES

const insereCliente = (id) => {
    return new Promise ((res, rej) => {
        db.run(`INSERT INTO CLIENTES( id_cliente, cpf, nome, email, telefone, endereco)  VALUES (?,?,?,?,?,?)`, [id_cliente, cpf, nome, email, telefone, endereco], id, (erro, rows) => {
            if (erro) {
                rej(erro.message)
            } else {
                res("Usuario criado com sucesso")
            }
        })
})
}

// ATUALIZAR CLIENTES-

 const atualizaCliente = (id) => {
    return new Promise ((res, rej) => {
        db.run(`UPDATE CLIENTES SET cpf = ?, nome = ?, email = ?, telefone = ?, endereco = ? WHERE id_cliente = ?`, [id_cliente, cpf, nome, email, telefone, endereco], id, (erro, rows) => {
            if (erro) {
                rej(erro.message)
            } else {
                res("Usuario $`{nome}` atualizado.")
            }
        })
})
}

const deletaCliente = () => {
    return new Promise ((res, rej) => {
        db.run("DELETE * FROM CLIENTES WHERE CLIENTE_ID = ?", (erro, rows) => {
            if (erro) {
                rej(erro.message)
            } else {
                res("Usuario $`{CLIENTE_ID}` deletado com sucesso.")
            }
        })
})
}

export { recebeCliente, recebeClientes, insereCliente, atualizaCliente, deletaCliente }
