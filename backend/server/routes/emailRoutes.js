import express from "express";
import { allEmail, sendEmail, oneEmail } from "../controller/emailController.js";

const router = express.Router();

// Get All 
router.get('/', allEmail);

// Send Email
router.post('/', sendEmail);

// Get One 
router.get('/:id', oneEmail);

export default router;