import app from "./app.js";
import connectionMongo from './config/mongo/connection.js';

connectionMongo()

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})