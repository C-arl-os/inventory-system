const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/:category_id/products', authMiddleware, productController.getAllProducts);
router.post('/:category_id/products', authMiddleware, productController.createProduct);
router.put('/:category_id/products/:id', authMiddleware, productController.updateProduct);
router.delete('/:category_id/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;