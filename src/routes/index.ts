import { Router } from "express";
import chatRoutes from "./chat-routes.js";
import userRoutes from "./user-routes.js";

const appRouter = Router();

appRouter.use("/user", userRoutes); //domain/api/v1/user
appRouter.use("/chats", chatRoutes); //domain/api/v1/chats


export default appRouter;