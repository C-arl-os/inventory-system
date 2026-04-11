const productModel = require('../models/product.model');

const getAllProducts = async (category_id) => {
    const products = await productModel.getAll(category_id);
    return products;
};

const createProduct = async (category_id, nombre, cantidad, precio) => {
    const product = await productModel.create(category_id, nombre, cantidad, precio);
    return product;
};  

const updateProduct = async (id, category_id, nombre, cantidad, precio) => {
    const product = await productModel.update(id, category_id, nombre, cantidad, precio);
    return product;
};

const deleteProduct = async (id) => {
    const product = await productModel.deleteById(id);  
    return product;
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
};