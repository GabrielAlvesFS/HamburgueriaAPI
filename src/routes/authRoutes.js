import express from "express";
import postAuthorization from "../controllers/authorization/postAuthorization.js";

const router = express.Router();

router
    .post('/v1/auth/login', postAuthorization)

export default router;