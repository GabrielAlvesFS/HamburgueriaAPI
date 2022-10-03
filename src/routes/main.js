import pedidos from "./pedidosRoutes.js";
import entregadores from "./entregadoresRoutes.js"
import itens from "./itemRoutes.js"
import clientes from "./clientesRoutes.js";
import itemPedido from "./itemPedidoRoutes.js"
import user from "./userRoutes.js"
import menu from "./menuRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Hamburgueria API" })
    })

    app.use(
        pedidos, 
        entregadores,
        pedidos,
        itens,
        clientes,
        itemPedido,
        user,
        menu
    );
}

export default routes;