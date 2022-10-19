import express from "express";
import postUser from "../controllers/users/postUserController.js";
import listUsers from "../controllers/users/listUsersController.js";
import getUser from "../controllers/users/getUserController.js";
import patchUser from "../controllers/users/patchUserController.js";
import deleteUser from "../controllers/users/deleteUserController.js";

const router = express.Router();

router
    .post("/v1/user", postUser)
    .get("/v1/users", listUsers)
    .get("/v1/user/:id", getUser)
    .patch("/v1/user/:id", patchUser)
    .delete("/v1/user/:id", deleteUser)
    
export default router;