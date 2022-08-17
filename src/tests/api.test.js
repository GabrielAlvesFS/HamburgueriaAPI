import request from "supertest";
import app from "../app.js"

describe('Rotas de clientes', () => {
    it('GET --> Clientes', async () => {
        const res = await request(app).get('/clientes')
        expect(res.statusCode).toEqual(200)
    })

    it('GET --> Cliente por ID 1', async () => {
        const res = await request(app).get('/clientes/1')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Rotas de entregadores', () => {
    it('GET --> Entregadores', async () => {
        const res = await request(app).get('/entregadores')
        expect(res.statusCode).toEqual(200)
    })

    it('GET --> Entregador por ID 1', async () => {
        const res = await request(app).get('/entregadores/1')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Rotas de Item', () => {
    it('GET --> Itens', async () => {
        const res = await request(app).get('/itens')
        expect(res.statusCode).toEqual(200)
    })

    it('GET --> Item por ID 1', async () => {
        const res = await request(app).get('/itens/1')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Rotas de Pedidos', () => {
    it('GET --> Pedidos', async () => {
        const res = await request(app).get('/pedidos')
        expect(res.statusCode).toEqual(200)
    })

    it('GET --> Pedido por ID 1', async () => {
        const res = await request(app).get('/pedidos/1')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Rotas de ItemPedidos', () => {
    it('GET --> ItemPedidos', async () => {
        const res = await request(app).get('/ItemPedido')
        expect(res.statusCode).toEqual(200)
    })

    it('GET --> ItemPedido por pedido_id 1', async () => {
        const res = await request(app).get('/ItemPedido/1')
        expect(res.statusCode).toEqual(200)
    })
})