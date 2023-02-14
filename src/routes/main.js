import pedidos from "./pedidosRoutes.js";
import entregadores from "./entregadoresRoutes.js";
import itens from "./itemRoutes.js";
import clientes from "./clientesRoutes.js";
import itemPedido from "./itemPedidoRoutes.js";
import auth from "./authRoutes.js";
import manager from "./managerRoutes.js"
import user from "./userRoutes.js";
import item from "./itemRoutes.js";
import complement from "./complementRoutes.js";
import category from "./categoryRoutes.js";
import order from "./orderRoutes.js";
import address from "./addressRoutes.js";
import payment from "./paymentRoutes.js";

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
        auth,
        manager,
        user,
        item,
        complement,
        category,
        order,
        address,
        payment
    );
}

export default routes;