const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.get('/', authMiddleware, categoryController.getAllCategorias);
router.post('/', authMiddleware, categoryController.createCategoria);
router.put('/:id', authMiddleware, categoryController.updateCategoria);
router.delete('/:id', authMiddleware, categoryController.deleteCategoria);

module.exports = router;