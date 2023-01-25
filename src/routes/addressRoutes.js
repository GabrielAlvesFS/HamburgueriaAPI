import express from 'express';
import checkAuth from "../middlewares/checkAuth.js";
import postAddress from '../controllers/addresses/postAddressController.js';
import listAddresses from '../controllers/addresses/listAddressesController.js';
import getAddress from '../controllers/addresses/getAddressController.js';

const router = express.Router()

router
    .post("/v1/address", checkAuth("customer"), postAddress)
    .get("/v1/address", checkAuth("customer"), listAddresses)
    .get("/v1/address/:id", checkAuth("customer"), getAddress)

export default router;