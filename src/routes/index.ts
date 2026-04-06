import { Router } from "express";
import welcomeRouter from "./welcome.routes";

const router = Router();

router.use("/", welcomeRouterRouter);

export default router;
