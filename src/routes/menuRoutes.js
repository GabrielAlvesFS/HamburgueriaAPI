import express from "express";
import createMenu from "../controllers/menu/createMenuController.js"
import findMenu from "../controllers/menu/findMenuController.js";
const router = express.Router();

router
    .post("/v1/menu", createMenu)
    .get("/v1/menu", findMenu)
    
export default router;  