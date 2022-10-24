import jwt from "jsonwebtoken";
import { logger } from "../config/logger.js";

export default (...types) =>
  async (req, res, next) => {
    try {
      if (!req.headers.authorization) throw new Error("No token provided")
      const [, token] = req.headers.authorization.split(" ");
      const jwtSecret = process.env.JWT_SECRET;
      const decodedToken = jwt.verify(token, jwtSecret);
      if (
        !types.find(
          (type) =>
            decodedToken.roles.split().some((role) => role === type)
        )
      )
        throw new Error("invalid token for this requisiton");
      req.payload = decodedToken;
      next();
    } catch (error) {
      if (error.message === "No token provided") return res.status(401).send({ error: error.message})
      else if (error.message === "invalid token for this requisiton") return res.status(401).send({ error: error.message})
      logger.error(error);
      res.status(401).send({message: "unathorized"})
    }
  };