import express from "express";
import postManager from "../controllers/manager/postManagerController.js";
import listManagers from "../controllers/manager/listManagersController.js";
import getManager from "../controllers/manager/getManagerController.js";
import patchManager from "../controllers/manager/patchManagerController.js";
import deleteManager from "../controllers/manager/deleteManagerController.js";

const router = express.Router();

router
    .post("/v1/manager", postManager)
    .get("/v1/manager", listManagers)
    .get("/v1/manager/:id", getManager)
    .patch("/v1/manager/:id", patchManager)
    .delete("/v1/manager/:id", deleteManager)
    
export default router;