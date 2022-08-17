
import db from "../database/database.js"

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

// BUSCA CLIENTES POR ID


const recebeCliente = (id) => {
    return new Promise ((res, rej) => {
        db.get("SELECT * FROM CLIENTES WHERE id = ?", id, (error, rows) => {
            if(error) {
                rej(error)
            } else if ((!rows) || rows.length <= 0) {
                rej({
                    "message": 'Cliente não encontrado',
                    "status": 400,
                    "erro": true
                })
            } else {
                res(rows)
            }
        })
})
}


// INSERE CLIENTES

const insereCliente = (dadosCliente) => {
    return new Promise ((res, rej) => {
        db.run(`INSERT INTO CLIENTES(nome, cpf,  data_nascimento,  telefone, email, endereco)  VALUES (?,?,?,?,?,?)`, Object.values(dadosCliente), (error, rows) => {
            if (error) {
                rej(error)
            } else {
                res({ 
                "msg": `Cliente cadastrado com sucesso!`
              }) 
            }
        })
})
}

// ATUALIZAR CLIENTES-

 const atualizaCliente = ( novosDadosCliente, id) => {
    return new Promise ((res, rej) => {
        db.run(`UPDATE CLIENTES SET nome = ?, cpf = ?,  data_nascimento = ?,  telefone = ?, email = ?, endereco = ? WHERE id = ${id}`, Object.values(novosDadosCliente), (error, rows) => {
            if (error) {
                rej(error.message)
            } else {
                res({"msg": `Usuario de ${id} atualizado com sucesso.`})
            }
        })
})
}

const deletaCliente = (Id) => {
    return new Promise ((res, rej) => {
        db.run(`DELETE FROM CLIENTES WHERE Id = ${Id}`, (error) => {
            if (error) {
                rej(error)
            }
            else {
                res({
                    "msg": `Cliente de id: ${Id} deletado com sucesso!`
                })
            }
        })
    })
}

export { recebeCliente, recebeClientes, insereCliente, atualizaCliente, deletaCliente }
