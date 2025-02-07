import { pool } from "../../database/connection.js";

const updateUserById =
  "UPDATE users SET username = $1, email = $2 WHERE id = $3";

 const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const username = req.body.username;
    const email = req.body.email;

    // validate the request body
    if (!username || !email) {
      return res
        .status(400)
        .json({ message: "username and email are required" });
    }

    //   validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ // return to stop the processing
            message: 'Invalid email format'
        });
    }
    
    //   check user id exists
    await pool.query(updateUserById, [username, email, id]);
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default updateUser;
