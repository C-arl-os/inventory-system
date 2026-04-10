const categoryService = require('../services/category.service');

const getAllCategorias = async (req, res) => {
    try {
        const categorias = await categoryService.getAllCategorias(req.user.id);
        res.json(categorias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
};

const createCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const categoria = await categoryService.createCategoria(req.user.id, nombre, descripcion);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        const categoria = await categoryService.updateCategoria(id, req.user.id, nombre, descripcion); // ✅
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryService.deleteCategoria(id);
        res.json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria
};