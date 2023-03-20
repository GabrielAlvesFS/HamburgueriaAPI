import express from 'express';
import checkAuth from "../middlewares/checkAuth.js";
import postAddress from '../controllers/addresses/postAddressController.js';
import listAddresses from '../controllers/addresses/listAddressesController.js';
import getAddress from '../controllers/addresses/getAddressController.js';
import patchAddress from '../controllers/addresses/patchAddressController.js';
import deleteAddress from '../controllers/addresses/deleteAddressController.js';

const router = express.Router()

router
    .post("/v1/address", checkAuth("customer"), postAddress)
    .get("/v1/address", checkAuth("customer", "manager"), listAddresses)
    .get("/v1/address/:id", checkAuth("customer", "manager"), getAddress)
    .patch("/v1/address/:id", checkAuth("customer"), patchAddress)
    .delete("/v1/address/:id", checkAuth("customer"), deleteAddress)

export default router;