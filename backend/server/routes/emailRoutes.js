import express from "express";

import { sendEmail } from "../controller/emailController.js";

const router = express.Router();

// Send Email (public)
router.post('/', sendEmail);

export default router;