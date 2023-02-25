import express from "express";
import { login } from "../controller/adminController.js";

const router = express.Router();

// Login Admin
router.post('/login', login);

export default router;