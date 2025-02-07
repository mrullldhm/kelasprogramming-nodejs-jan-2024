import { pool } from "../../database/connection.js";

// SQL query
const queryAllUsers = `SELECT * FROM users`;
const queryUserById = `SELECT * FROM users WHERE id = $1`;

export const readAllUsers = async (req, res) => {
    try {
        const resDb = await pool.query(queryAllUsers);
        const data = resDb.rows;
        res.status(200).json({ data:data });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

export const readUserById = async (req, res) => {
    try {
        const id = req.params.id; // params is a dynamic parameter from the URL
        const dbRes = await pool.query(queryUserById, [id]);
        const data = dbRes.rows;
        if (data.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        res.status(200).json({ data:data });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

