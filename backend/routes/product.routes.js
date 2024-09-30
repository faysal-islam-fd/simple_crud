import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router()
router.route('/api/products')
.post(createProduct)
.get(getProducts)
router.route('/api/products/:id')
.delete(deleteProduct)
.patch(updateProduct)
export default router