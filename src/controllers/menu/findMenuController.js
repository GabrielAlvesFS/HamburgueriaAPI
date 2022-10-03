import { findMenu } from "../../services/menu.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    const data = await findMenu(req.body);
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}