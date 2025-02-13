import { Router } from "express";
import isAuth from "../middlewares/isAuth.js";
import createNewSlot from "../controllers/slot/slot.create.js";
import listAllSlots from "../controllers/slot/slot.list.js";
import deleteSlot from "../controllers/slot/slot.delete.js";
import listAllBookedSlots from "../controllers/slot/slot.bookedList.js";

const privateRouter = Router();

// Simplify the isAuth middleware chain
privateRouter.use(isAuth); 

privateRouter.get("/helloworld", (req, res) => {
  res.send("<h1>Hello Admin!</h1>");
});

privateRouter.get("/helloworld-json", (req, res) => {
  res.json({ message: "Hello admin!" });
});

privateRouter.post("/slots", createNewSlot);    // CREATE
privateRouter.get("/slots", listAllSlots);      // READ
privateRouter.delete("/slots/:id", deleteSlot); // DELETE

privateRouter.get("/bookings", listAllBookedSlots);

export default privateRouter;
