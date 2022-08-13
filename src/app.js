import express from "express";
import cors from "cors"
import routes from "./routes/main.js";

const corsConfig = {
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}

const app = express()

//middleware
app.use(
    express.json(),
    cors(corsConfig)
)

routes(app)

export default app;