import express from "express";
import cors from "cors"
import routes from "./routes/main.js";
import { errorHandler } from "./utils/errorHandler.js";

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

app.use(
    errorHandler
)

export default app;