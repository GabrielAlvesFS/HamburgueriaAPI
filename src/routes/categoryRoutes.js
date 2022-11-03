import express from 'express';
import postCategory from '../controllers/category/postCategoryController.js';
import listCategories from '../controllers/category/listCategoriesController.js';
import getCategory from '../controllers/category/getCategoryController.js';
import patchCategory from '../controllers/category/patchCategoryController.js';
import deleteCategory from '../controllers/category/deleteCategoryController.js';

const router = express.Router()

router
    .post("/v1/category", postCategory)
    .get("/v1/category", listCategories)
    .get("/v1/category/:id", getCategory)
    .patch("/v1/category/:id", patchCategory)
    .delete("/v1/category/:id", deleteCategory)

export default router;   