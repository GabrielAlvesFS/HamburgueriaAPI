import express from "express";
import postItem from "../controllers/items/postItemController.js";
import listItems from "../controllers/items/listItemsController.js";
import getItem from "../controllers/items/getItemController.js";
import patchItem from "../controllers/items/patchItemController.js";

const router = express.Router();

router
    .post("/v1/item", postItem)
    .get("/v1/item", listItems)
    .get("/v1/item/:id", getItem)
    .patch("/v1/item/:id", patchItem)
    
export default router;  