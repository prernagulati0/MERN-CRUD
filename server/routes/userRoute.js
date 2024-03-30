import express from "express";
import {
  create,
  deleteUser,
  getAll,
  getUser,
  update,
} from "../controller/userController.js";

const route = express.Router();
route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getUser/:id", getUser);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
