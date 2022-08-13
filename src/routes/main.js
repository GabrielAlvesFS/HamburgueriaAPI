import pedidos from "./pedidosRoutes.js";
import clientes from "./clientesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Hamburgueria API" })
    })

    app.use(
        pedidos,
        clientes
    );
}

export default routes;