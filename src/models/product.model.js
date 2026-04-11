const pool = require("../config/database");

const getAll = async (category_id) => {
  const res = await pool.query('SELECT * FROM products WHERE category_id = $1', [category_id]);
    return res.rows;
};

const create = async (category_id, nombre, cantidad, precio) => {
    const res = await pool.query(
        'INSERT INTO products (category_id, nombre, cantidad, precio) VALUES ($1, $2, $3, $4) RETURNING *',
        [category_id, nombre, cantidad, precio]
    );
    return res.rows[0];
}

const update = async (id, category_id, nombre, cantidad, precio) => {
    const res = await pool.query(
        'UPDATE products SET nombre = $1, cantidad = $2, precio = $3 WHERE id = $4 AND category_id = $5 RETURNING *',
        [nombre, cantidad, precio, id, category_id]
    );
    return res.rows[0];
};

const deleteById = async (id) => {
    const res = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    return res.rows[0];
}

module.exports = {
    getAll,
    create,
    update,
    deleteById
};