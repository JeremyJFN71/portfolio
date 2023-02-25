import express from "express";

import { allEmail, sendEmail, oneEmail } from "../controller/emailController.js";
import adminMiddleware from '../middleware/adminMiddleware.js'

const router = express.Router();

// Get All (admin)
router.get('/', adminMiddleware, allEmail);

// Send Email (public)
router.post('/', sendEmail);

// Get One (admin)
router.get('/:id', adminMiddleware, oneEmail);

export default router;