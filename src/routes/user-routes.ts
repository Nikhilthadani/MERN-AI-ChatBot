import { Router } from "express";
import { getDefaultHighWaterMark } from "stream";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers)

export default userRoutes;