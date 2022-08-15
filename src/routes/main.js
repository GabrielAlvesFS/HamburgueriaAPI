import pedidos from "./pedidosRoutes.js";
import entregadores from "./entregadoresRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Hamburgueria API" })
    })

    app.use(
        pedidos, 
        entregadores
    );
}

export default routes;