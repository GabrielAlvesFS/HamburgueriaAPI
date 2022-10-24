import { listUsers } from "../../services/users.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    //pega todos se não tiver body, caso tenha é filtrado por ele
    const data = await listUsers(req.body, "-password")
    res.send(data)
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}