import pedidos from "./pedidosRoutes.js";
import itemPedido from "./itemPedidoRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Hamburgueria API" })
    })

    app.use(
        pedidos,
        itemPedido
    );
}

export default routes;