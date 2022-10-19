import express from "express";
import postManager from "../controllers/manager/postManagerController.js";

const router = express.Router();

router
    .post("/v1/manager", postManager)
    
export default router;