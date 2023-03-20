import mongoose from "mongoose";
import { logger } from "../logger.js";

export default async () => {
  const connectionString = process.env.MONGODB_CONNECTION_STRING
  try {
    mongoose.connect(connectionString);
    logger.info('DB conectado!');
  } catch (error) {
    logger.error(error);
  }
};