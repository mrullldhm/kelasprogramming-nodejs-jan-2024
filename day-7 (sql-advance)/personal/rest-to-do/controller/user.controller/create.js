import { pool } from "../../database/connection.js";
import bcrypt from 'bcrypt';

// $ sign is a placeholder for dynamic value
// A dynamic value is a value that changes at runtime based on user input, system state, or external data sources
const query = `
INSERT INTO users (username, password, email, is_admin)
VALUES ($1, $2, $3, $4)
`;

const createUser = async (req, res) => {
    try {
        const SALTROUNDS =10;   // bcrypt, use 10 and greater
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const isAdmin = req.body.isAdmin;

        // validate the request body
        if (!username || !password || !email) {
            return res.status(400).json({ // return to stop the processing
                message: 'Username, password, and email are required'
            });
        }
        // validate the email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ // return to stop the processing
                message: 'Invalid email format'
            });
        }
        // check if the username is already exist (EXPLORE)

        // hash the password
        const salt = await bcrypt.genSalt(SALTROUNDS);
        const hashedPassword = await bcrypt.hash(password, salt);
        // SQL query
        const dbRespond = await pool.query(query, [
            username, 
            hashedPassword, 
            email, 
            isAdmin]);
        console.log(dbRespond);
        res.status(201).json({ 
            message: 'User is created' });
    } catch (error) {
        console.error(error);
        // rewrite the error message
        // it isnt a best practice to expose the error message from database to client
        res.status(500).json({ 
            message: 'Internal server error'});
    }
}

export default createUser;