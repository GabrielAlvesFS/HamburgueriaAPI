import jwt from "jsonwebtoken";
import { logger } from "../config/logger.js";

export default (...types) =>
  async (req, res, next) => {
    try {
      const [, token] = req.headers.authorization.split(" ");
      const jwtSecret = process.env.JWT_SECRET;
      const decodedToken = jwt.verify(token, jwtSecret);
      if (
        !types.find(
          (type) =>
            decodedToken.roles.some((role) => role === type) ||
            decodedToken.roles.includes("manager")
        )
      )
        throw new Error("invalid token for this requisiton");
      req.payload = decodedToken;
      next();
    } catch (e) {
      logger.error(e);
      res.status(401).send({message: "unathorized"})
    }
  };