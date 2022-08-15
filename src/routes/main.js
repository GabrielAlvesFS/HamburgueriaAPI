import pedidos from "./pedidosRoutes.js";
import itens from "./itemRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Hamburgueria API" })
    })

    app.use(
        pedidos,
        itens
    );
}

export default routes;