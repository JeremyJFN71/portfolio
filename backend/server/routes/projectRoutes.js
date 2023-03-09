import express from "express";
import { allRepos } from "../controller/projectController.js";

const router = express.Router();

router.get('/', allRepos);

export default router;