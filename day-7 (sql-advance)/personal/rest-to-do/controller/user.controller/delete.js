import { pool } from "../../database/connection.js";

// SQL queries
const UserExistsById = "SELECT * FROM users WHERE id = $1";  // Query to check if user exists
const DeleteUserById = "DELETE FROM users WHERE id = $1";

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the user exists before trying to delete
    const userCheck = await pool.query(UserExistsById, [id]);

    if (userCheck.rows.length === 0) {
      return res.status(404).json({ message: "User not found" }); // User doesn't exist
    }

    // Proceed with the deletion if user exists
    await pool.query(DeleteUserById, [id]);

    // Respond with a success message
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default deleteUser;
