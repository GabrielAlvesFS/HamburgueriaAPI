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