import express from "express";
import postManager from "../controllers/manager/postManagerController.js";
import listManagers from "../controllers/manager/listManagersController.js";
import getManager from "../controllers/manager/getManagerController.js";

const router = express.Router();

router
    .post("/v1/manager", postManager)
    .get("/v1/manager", listManagers)
    .get("/v1/manager/:id", getManager)
    
export default router;