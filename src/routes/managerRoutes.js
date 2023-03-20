import express from "express";
import checkAuth from "../middlewares/checkAuth.js";
import postManager from "../controllers/manager/postManagerController.js";
import listManagers from "../controllers/manager/listManagersController.js";
import getManager from "../controllers/manager/getManagerController.js";
import patchManager from "../controllers/manager/patchManagerController.js";
import deleteManager from "../controllers/manager/deleteManagerController.js";

const router = express.Router();

router
    .post("/v1/manager", checkAuth("manager"), postManager)
    .get("/v1/manager", checkAuth("manager"), listManagers)
    .get("/v1/manager/:id", checkAuth("manager"), getManager)
    .patch("/v1/manager/:id", checkAuth("manager"), patchManager)
    .delete("/v1/manager/:id", checkAuth("manager"), deleteManager)
    
export default router;