// Pool Connection
import { pool } from "../../database/connection.js";

const createTodo = async (req, res) => {
  try {
    // SQL query
    const query = `
        INSERT INTO to_dos (text, user_id)
        VALUES ($1, $2)
        `;

    // Request body from client
    const text = req.body.text;
    const userId = req.userId;

    // Validate the request body is not empty
    if (!text || !userId) {
      return res.status(400).json({
        message: "Invalid request: Text and User ID are required.",
      });
    }

    // Execute the SQL query
    await pool.query(query, [text, userId]);
    res.status(201).json({
      message: "To-do is created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default createTodo;
