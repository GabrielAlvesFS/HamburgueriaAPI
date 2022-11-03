import express from 'express';
import postComplement from '../controllers/complements/postComplementController.js';
import listComplements from '../controllers/complements/listComplementsController.js';
import getComplement from '../controllers/complements/getComplementController.js';

const router = express.Router();

router
    .post("/v1/complement", postComplement)
    .get("/v1/complement", listComplements)
    .get("/v1/complement/:id", getComplement)

export default router;   