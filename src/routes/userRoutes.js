import express from "express";
import createUser from "../controllers/users/createUserController.js";
import findUser from "../controllers/users/findUserController.js";

const router = express.Router();

router
    .post("/v1/user", createUser)
    .get("/v1/users", findUser)
    
export default router;