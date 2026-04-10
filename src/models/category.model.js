const pool = require("../config/database");
const getAll = async (user_id) => {
    const res = await pool.query('SELECT * FROM categories WHERE user_id = $1', [user_id]);
    return res.rows;
};

const create = async (user_id, nombre, descripcion) => {
    const res = await pool.query(
        'INSERT INTO categories (user_id, nombre, descripcion) VALUES ($1, $2, $3) RETURNING *',
        [user_id, nombre, descripcion]
    );
    return res.rows[0];
};

const update = async (id, user_id, nombre, descripcion) => {
    const res = await pool.query(
        'UPDATE categories SET nombre = $1, descripcion = $2 WHERE id = $3 AND user_id = $4 RETURNING *',
        [nombre, descripcion, id, user_id]
    );
    return res.rows[0];
};

const deleteById = async (id_categoria) => {
    await pool.query('DELETE FROM categories WHERE id = $1', [id_categoria]);
};

module.exports = {
    getAll,
    create,
    update,
    deleteById
};