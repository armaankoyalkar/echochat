import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectAuth } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/check", protectAuth, checkAuth);

export default router;
