import express from "express";
import postItem from "../controllers/items/postItemController.js"
import listItems from "../controllers/items/listItemsController.js";
const router = express.Router();

router
    .post("/v1/item", postItem)
    .get("/v1/item", listItems)
    
export default router;  