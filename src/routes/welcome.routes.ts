import { Router } from "express";
import { getWelcome } from "../controllers/welcome.controller";

const router = Router();

router.get("/welcome", getWelcome);

export default router;
