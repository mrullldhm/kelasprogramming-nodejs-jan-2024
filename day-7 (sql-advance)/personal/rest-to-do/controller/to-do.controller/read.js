// Pool connection
import { pool } from "../../database/connection.js";

const listAllToDos = async (req, res) => {
  const userId = req.userId; 
  try {
    // SQL query
    const query = `
            SELECT * FROM to_dos
            WHERE user_id = $1
        `;

    // Execute SQL query
    const dbRes = await pool.query(query, [userId]);
    const data = dbRes.rows;
    console.log(data);
    // console.log(dbRes);
    res.status(200).json({
      message: `${data.length} to-dos found`,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default listAllToDos;
