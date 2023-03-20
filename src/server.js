import { logger } from "./config/logger.js";
import app from "./app.js";
import connectionMongo from './config/mongo/connection.js';
import { database, up } from 'migrate-mongo';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger.json' assert { type: "json" };

connectionMongo()

const runMigrationsMongo = async () => {
    const { db, client } = await database.connect();
    const migrations = await up(db, client);
    const migrationsNames = migrations.toString().split(",")
    migrationsNames.forEach( migrationName => logger.info(`Migration ${migrationName} successfully executed!`))
}

runMigrationsMongo()

const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.listen(port, () => {
    logger.info(`Server listening at http://localhost:${port}`);
    logger.info(`Docs available at http://localhost:${port}/api-docs`);
})