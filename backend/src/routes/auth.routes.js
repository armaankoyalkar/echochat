import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/check", protectAuth, checkAuth);

export default router;
