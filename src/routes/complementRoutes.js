import express from 'express';
import checkAuth from '../middlewares/checkAuth.js';
import postComplement from '../controllers/complements/postComplementController.js';
import listComplements from '../controllers/complements/listComplementsController.js';
import getComplement from '../controllers/complements/getComplementController.js';
import patchComplement from '../controllers/complements/patchComplementController.js';
import deleteComplement from '../controllers/complements/deleteComplementController.js';

const router = express.Router();

router
    .post("/v1/complement", checkAuth("manager"), postComplement)
    .get("/v1/complement", checkAuth("manager"), listComplements)
    .get("/v1/complement/:id", checkAuth("manager"), getComplement)
    .patch("/v1/complement/:id", checkAuth("manager"), patchComplement)
    .delete("/v1/complement/:id", checkAuth("manager"), deleteComplement)

export default router;   