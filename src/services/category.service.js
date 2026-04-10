
const categoryModel = require('../models/category.model'); 

const getAllCategorias = async (user_id) => {
    const categorias = await categoryModel.getAll(user_id);
    return categorias;
};

const createCategoria = async (user_id, nombre, descripcion) => {
    const categoria = await categoryModel.create(user_id, nombre, descripcion);
    return categoria;
};

const updateCategoria = async (id, user_id, nombre, descripcion) => {
    const categoria = await categoryModel.update(id, user_id, nombre, descripcion);
    return categoria;
};

const deleteCategoria = async (id_categoria) => {
    await categoryModel.deleteById(id_categoria);
};

module.exports = {
    getAllCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria
};