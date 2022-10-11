import express from "express";
import postUser from "../controllers/users/postUserController.js";
import listUsers from "../controllers/users/listUsersController.js";

const router = express.Router();

router
    .post("/v1/user", postUser)
    .get("/v1/users", listUsers)
    
export default router;