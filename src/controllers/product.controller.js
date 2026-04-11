const productService = require('../services/product.service');

const getAllProducts = async (req, res) => {
    try {
        const categorias = await productService.getAllProducts(req.params.category_id);
        res.json(categorias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};

const createProduct = async (req, res) => {
    try {
        const { nombre, cantidad, precio } = req.body;
        const product = await productService.createProduct(req.params.category_id, nombre, cantidad, precio);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id, category_id } = req.params; // ← ambos de params
        const { nombre, cantidad, precio } = req.body;
        const product = await productService.updateProduct(id, category_id, nombre, cantidad, precio);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id, category_id } = req.params; // ← ambos de params
        const product = await productService.deleteProduct(id, category_id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};