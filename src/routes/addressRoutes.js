import express from 'express';
import checkAuth from "../middlewares/checkAuth.js";
import postAddress from '../controllers/addresses/postAddressController.js';

const router = express.Router()

router
    .post("/v1/address", checkAuth("customer"), postAddress)

export default router;  