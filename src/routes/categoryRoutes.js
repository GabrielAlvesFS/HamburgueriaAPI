import express from 'express';
import postCategory from '../controllers/category/postCategoryController.js';

const router = express.Router()

router
    .post("/v1/category", postCategory)

export default router;   